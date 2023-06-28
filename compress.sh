#!/bin/bash

# 这里添加您在tinypng官网上注册的API key，用于授权
API_KEY="API_KEY"

# 检查是否安装了curl和jq（用来解析JSON数据）
if ! command -v curl &> /dev/null || ! command -v jq &> /dev/null
then
    echo "Please install 'curl' and 'jq' first."
    exit
fi

# 检查脚本参数
if [ $# -ne 1 ]
then
    echo "Usage: $0 [folder_path]"
    exit
fi

# 检查文件夹是否存在
if [ ! -d "$1" ]
then
    echo "The folder does not exist."
    exit
fi

# 遍历文件夹内的所有文件和子文件夹
find "$1" \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0 |
while IFS= read -r -d '' file; do
    # 调用tinify API
    result=$(curl -s -H "Authorization: Basic $(echo -n "api:$API_KEY" | base64)" \
             --data-binary @"$file" https://api.tinify.com/shrink)
    
    # 解析JSON数据，获取压缩后的图片URL和大小
    url=$(echo "$result" | jq -r '.output.url')
    size=$(echo "$result" | jq -r '.output.size')
    
    # 下载压缩后的图片并替换原有图片
    curl -s "$url" --output "$file"
    
    # 打印压缩信息
    size_kb=$(bc -l <<< "scale=2;$size/1024")
    echo "Compressed $file, size reduced from $(du -h "$file" | cut -f1) to "$size_kb"K."
done