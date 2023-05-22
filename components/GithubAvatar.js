import { useEffect, useState } from 'react';

import { Avatar, Box } from '@mui/material';

export default function GithubAvatar(props) {
  const { owner = 'lxdao-official', repo = 'myfirstlayer2-frontend', path = '' } = props;
  const [avatarUrls, setAvatarUrls] = useState([]);

  useEffect(() => {
    // 在组件加载时获取贡献者头像
    fetchContributorAvatars(owner, repo, path)
      .then((urls) => setAvatarUrls(urls))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h2>本章节贡献人</h2>

      <Box
        sx={{
          display: 'flex',
        }}
      >
        {avatarUrls.map((url) => (
          <Box key={url}>
            <Box
              sx={{
                padding: '5px',
                marginTop: '-5px',
              }}
            >
              <Avatar
                sx={{
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                }}
                src={url}
                alt="Contributor Avatar"
              />
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}

async function fetchContributorAvatars(owner = 'lxdao-official', repo = 'myfirstlayer2-frontend', path = '') {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?path=${path}`);
    const commits = await response.json() || [];
    

    const contributors = commits?.map((commit) => commit?.author);

    const avatarUrls = contributors?.map((contributor) => contributor?.avatar_url);

    return Array.from(new Set(avatarUrls));
  } catch (error) {
    console.error('Error fetching contributor avatars:', error);
    return [];
  }
}
