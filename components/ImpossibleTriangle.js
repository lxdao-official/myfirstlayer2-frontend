import G6 from '@antv/g6';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

let side = '';
export default function ImpossibleTriangle({ children, title }) {
  const t = useTranslations('PageLayout');
  const [dragNodes, setDragNodes] = useState([]);
  // const [side, setSide] = useState('');

  const distanceOfPoint2Line = (point0, point1, point2) => {
    const x = point0.x;
    const y = point0.y;
    const x1 = point1.x;
    const y1 = point1.y;
    const x2 = point2.x;
    const y2 = point2.y;

    //三角形三个边长
    var A = Math.abs(Math.sqrt(Math.pow(x - x1, 2) + Math.pow(y - y1, 2)));
    var B = Math.abs(Math.sqrt(Math.pow(x - x2, 2) + Math.pow(y - y2, 2)));
    var C = Math.abs(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)));
    //利用海伦公式计算三角形面积
    //周长的一半
    var P = (A + B + C) / 2;
    var allArea = Math.abs(Math.sqrt(P * (P - A) * (P - B) * (P - C)));
    //普通公式计算三角形面积反推点到线的垂直距离
    var dis = (2 * allArea) / C;
    return dis;
  };

  const area = 16560;

  const [innerPoints, setInnerPoints] = useState([
    {
      x: 212,
      y: 94,
    },
    { x: 138, y: 94 + 120 },
    {
      x: 138 + 138,
      y: 94 + 120,
    },
  ]);

  const oldInner = [
    {
      x: 212,
      y: 94,
    },
    { x: 138, y: 94 + 120 },
    {
      x: 138 + 138,
      y: 94 + 120,
    },
  ];

  const outerTriangle = [
    {
      x: 212,
      y: 50,
    },
    { x: 100, y: 50 + 188 },
    {
      x: 100 + 216,
      y: 50 + 188,
    },
  ];

  const data = {
    nodes: [
      {
        id: '0',
        ...oldInner[0],
        size: 10,
        style: {
          fill: 'white',
          stroke: 'white',
        },
      },
      {
        id: '1',
        ...oldInner[1],
        size: 10,
        style: {
          fill: 'white',
          stroke: 'white',
        },
      },
      {
        id: '2',
        ...oldInner[2],
        size: 10,
        style: {
          fill: 'white',
          stroke: 'white',
        },
      },
      {
        id: '3',
        label: '去中心化',
        ...outerTriangle[0],
        size: 5,
        style: {
          fill: 'white',
          stroke: 'white',
        },
        labelCfg: {
          position: 'top',
          offset: 5,
          style: { fill: 'white', fontSize: 16, fontFamily: 'sucaijishikangkangti' },
        },
      },
      {
        id: '4',
        label: '可扩展性',
        ...outerTriangle[1],
        size: 5,
        style: {
          fill: 'white',
          stroke: 'white',
        },
        labelCfg: {
          position: 'left',
          offset: 10,
          style: { fill: 'white', fontSize: 16, fontFamily: 'sucaijishikangkangti' },
        },
      },
      {
        id: '5',
        label: '安全性',
        ...outerTriangle[2],
        size: 5,
        style: {
          fill: 'white',
          stroke: 'white',
        },
        labelCfg: {
          position: 'right',
          offset: 10,
          style: { fill: 'white', fontSize: 16, fontFamily: 'sucaijishikangkangti' },
        },
      },
    ],
    edges: [
      { source: '0', target: '1', style: { lineWidth: 5, stroke: 'white' } },
      { source: '1', target: '2', style: { lineWidth: 5 } },
      { source: '2', target: '0', style: { lineWidth: 5 } },
      { source: '3', target: '4', style: { lineWidth: 5 } },
      { source: '4', target: '5', style: { lineWidth: 5 } },
      { source: '5', target: '3', style: { lineWidth: 5 } },
    ],
  };

  const changeColor = (graph, index, color) => {
    // debugger;
    // setSide(index);
    side = index;
    const style = { style: { fill: color, stroke: color } };
    const white = { style: { fill: 'white', stroke: 'white' } };
    graph.cfg.nodes.forEach((item) => {
      graph.updateItem(item, {
        labelCfg: {
          ...white,
        },
      });
    });
    graph.cfg.edges.forEach((item) => {
      graph.updateItem(item, {
        ...white,
      });
    });
    if (index == 1) {
      graph.updateItem(graph.cfg.nodes[3], {
        labelCfg: {
          ...style,
        },
      });
      graph.updateItem(graph.cfg.nodes[4], {
        labelCfg: {
          ...style,
        },
      });
    } else if (index == 2) {
      graph.updateItem(graph.cfg.nodes[4], {
        labelCfg: {
          ...style,
        },
      });
      graph.updateItem(graph.cfg.nodes[5], {
        labelCfg: {
          ...style,
        },
      });
    } else {
      graph.updateItem(graph.cfg.nodes[3], {
        labelCfg: {
          ...style,
        },
      });
      graph.updateItem(graph.cfg.nodes[5], {
        labelCfg: {
          ...style,
        },
      });
    }

    graph.updateItem(graph.cfg.nodes[0], {
      ...style,
    });
    graph.updateItem(graph.cfg.nodes[1], {
      ...style,
    });
    graph.updateItem(graph.cfg.nodes[2], {
      ...style,
    });
    graph.updateItem(graph.cfg.edges[0], {
      ...style,
    });
    graph.updateItem(graph.cfg.edges[1], {
      ...style,
    });
    graph.updateItem(graph.cfg.edges[2], {
      ...style,
    });
  };

  const twoPointDistance = (p1, p2) => {
    let dep = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    return dep;
  };

  const pointInTriangle = (x0, y0) => {
    const x1 = outerTriangle[0].x;
    const y1 = outerTriangle[0].y;
    const x2 = outerTriangle[1].x;
    const y2 = outerTriangle[1].y;
    const x3 = outerTriangle[2].x;
    const y3 = outerTriangle[2].y;
    var divisor = (y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3);
    var a = ((y2 - y3) * (x0 - x3) + (x3 - x2) * (y0 - y3)) / divisor;
    var b = ((y3 - y1) * (x0 - x3) + (x1 - x3) * (y0 - y3)) / divisor;
    var c = 1 - a - b;

    return a >= 0 && a <= 1 && b >= 0 && b <= 1 && c >= 0 && c <= 1;
  };

  useEffect(() => {
    if (window.graph) {
      return;
    }

    const graph = new G6.Graph({
      container: 'mountNode', // String | HTMLElement，必须，容器 id 或容器本身
      width: 400, // Number，必须，图的宽度
      height: 300, // Number，必须，图的高度
      animate: true, // Boolean，可选，切换布局时是否使用动画过度

      modes: {
        default: [
          {
            type: 'drag-node',
            enableDelegate: false,
            // shouldBegin: (e) => {
            //   debugger;
            //   // 不允许拖拽 id 为 'node1' 的节点
            //   if (e.item && e.item.getModel().id === "node1") return false;
            // },
            shouldEnd: (e) => {
              return true;
            },
          },
        ], // 允许拖拽画布、放缩画布、拖拽节点
      },
      nodeStateStyles: {
        fill: 'transparent',
        // 鼠标 hover 上节点，即 hover 状态为 true 时的样式

        // 鼠标点击节点，即 click 状态为 true 时的样式
        click: {
          stroke: '#000',
          lineWidth: 3,
        },
      },
    });
    window.graph = graph;
    graph.on('node:dragend', (e) => {
      const index = graph.cfg.nodes.indexOf(e.target.cfg.parent.cfg.item);
      const outer = graph.cfg.nodes[index + 3];
      const isIn = pointInTriangle(e.canvasX, e.canvasY);
      const dis = twoPointDistance(
        {
          x: e.canvasX,
          y: e.canvasY,
        },
        {
          x: outer._cfg.model.x,
          y: outer._cfg.model.y,
        }
      );
      const nodeItem = e.item;
      console.log(isIn, dis);

      if (!isIn) {
        // point is out of triangle
        graph.updateItem(nodeItem, {
          x: innerPoints[index].x,
          y: innerPoints[index].y,
        });
      } else {
        if (index === 0) {
          const node1 = graph.cfg.nodes[1];
          const node2 = graph.cfg.nodes[2];

          const node2Point = {
            x: node2._cfg.model.x + (nodeItem._cfg.model.x - innerPoints[index].x),
            y: node2._cfg.model.y + (nodeItem._cfg.model.y - innerPoints[index].y),
          };

          const node1Point = {
            x: node1._cfg.model.x,
            y: node1._cfg.model.y + (nodeItem._cfg.model.y - innerPoints[index].y),
          };

          // const node2Point = {
          //   x: node2._cfg.model.x + (nodeItem._cfg.model.x - innerPoints[index].x),
          //   y: node2._cfg.model.y + (nodeItem._cfg.model.y - innerPoints[index].y),
          // };

          const disP0P1 = twoPointDistance(nodeItem._cfg.model, node1._cfg.model);

          // const node2Point = {
          //   x: (node1._cfg.model.x + nodeItem._cfg.model.x) / 2,
          //   y: (node1._cfg.model.y + nodeItem._cfg.model.y) / 2,
          // };

          if (!pointInTriangle(node2Point.x, node2Point.y) || !pointInTriangle(node1Point.x, node1Point.y)) {
            graph.updateItem(nodeItem, {
              x: innerPoints[index].x,
              y: innerPoints[index].y,
            });
            return;
          }
          graph.updateItem(node2, node2Point);
          // graph.updateItem(node1, node1Point);
        } else if (index === 1) {
          const node0 = graph.cfg.nodes[0];
          const node2 = graph.cfg.nodes[2];
          const node0Point = {
            x: node0._cfg.model.x + (nodeItem._cfg.model.x - innerPoints[index].x),
            y: node0._cfg.model.y + (nodeItem._cfg.model.y - innerPoints[index].y),
          };

          const node2Point = {
            x: node2._cfg.model.x,
            y: node2._cfg.model.y + (nodeItem._cfg.model.y - innerPoints[index].y),
          };
          if (!pointInTriangle(node0Point.x, node0Point.y) || !pointInTriangle(node2Point.x, node2Point.y)) {
            graph.updateItem(nodeItem, {
              x: innerPoints[index].x,
              y: innerPoints[index].y,
            });
            return;
          }
          graph.updateItem(node0, node0Point);
          graph.updateItem(node2, node2Point);
        } else if (index == 2) {
          const node0 = graph.cfg.nodes[0];
          const node1 = graph.cfg.nodes[1];
          const node0Point = {
            x: node0._cfg.model.x,
            y: node0._cfg.model.y + (nodeItem._cfg.model.y - innerPoints[index].y),
          };

          const node1Point = {
            x: node1._cfg.model.x + (nodeItem._cfg.model.x - innerPoints[index].x),
            y: node1._cfg.model.y + (nodeItem._cfg.model.y - innerPoints[index].y),
          };
          if (!pointInTriangle(node0Point.x, node0Point.y) || !pointInTriangle(node1Point.x, node1Point.y)) {
            graph.updateItem(nodeItem, {
              x: innerPoints[index].x,
              y: innerPoints[index].y,
            });
            return;
          }
          graph.updateItem(node0, node0Point);
          graph.updateItem(node1, node1Point);
        }
        if (dragNodes.length <= 1) {
          if (!dragNodes.includes(index)) {
            dragNodes.push(index);
          }

          setDragNodes([...dragNodes]);
          if (dragNodes.length === 1) {
            setTimeout(() => {
              if (dragNodes.length === 1) {
                graph.updateItem(graph.cfg.nodes[0], {
                  x: oldInner[0].x,
                  y: oldInner[0].y,
                });
                graph.updateItem(graph.cfg.nodes[1], {
                  x: oldInner[1].x,
                  y: oldInner[1].y,
                });
                graph.updateItem(graph.cfg.nodes[2], {
                  x: oldInner[2].x,
                  y: oldInner[2].y,
                });
              }
            }, 5000);
            setDragNodes([]);
          }
        } else {
          const p0 = graph.cfg.nodes[0]._cfg.model;
          const p1 = graph.cfg.nodes[1]._cfg.model;
          const p2 = graph.cfg.nodes[2]._cfg.model;

          const d01 = distanceOfPoint2Line(p0, outerTriangle[0], outerTriangle[1]);
          const d03 = distanceOfPoint2Line(p0, outerTriangle[0], outerTriangle[2]);
          const d11 = distanceOfPoint2Line(p1, outerTriangle[0], outerTriangle[1]);
          const d12 = distanceOfPoint2Line(p1, outerTriangle[1], outerTriangle[2]);
          const d22 = distanceOfPoint2Line(p2, outerTriangle[1], outerTriangle[2]);
          const d23 = distanceOfPoint2Line(p2, outerTriangle[0], outerTriangle[2]);
          if (d01 < 15 && d11 < 15) {
            changeColor(graph, 1, '#FF6055');
          } else if (d12 < 15 && d22 < 15) {
            changeColor(graph, 2, '#FFC64E');
          } else if (d03 < 15 && d23 < 15) {
            changeColor(graph, 3, '#5979ED');
          }
          setDragNodes([]);
        }
        innerPoints[index].y = nodeItem._cfg.model.y;
        innerPoints[index].x = nodeItem._cfg.model.x;
        setInnerPoints([...innerPoints]);
      }
    });

    // mouse enter
    graph.on('node:mouseenter', (e) => {
      const nodeItem = e.item; // get element
      if (e.item && (e.item.getModel().id === '3' || e.item.getModel().id === '4' || e.item.getModel().id === '5')) {
        return;
      }
      graph.setItemState(nodeItem, 'hover', true);
      graph.updateItem(nodeItem, {
        size: 20,
      });
    });
    graph.on('node:mouseleave', (e) => {
      if (e.item && (e.item.getModel().id === '3' || e.item.getModel().id === '4' || e.item.getModel().id === '5')) {
        return;
      }
      const nodeItem = e.item;
      graph.setItemState(nodeItem, 'hover', false);
      graph.setItemState(nodeItem, 'active', false);
      graph.updateItem(nodeItem, {
        size: 10,
      });
    });
    graph.data(data);
    graph.render();
    // return () => {
    //   graph.clear();
    //   window.graph = null;
    // };
  }, []);
  //57%

  return (
    <Box sx={{ background: '#F6F6F6', paddingBlock: '30px', paddingInline: '65px', marginBlock: '30px', borderRadius: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ background: '#1E1E1E', width: '400px', height: '300px', borderRadius: '18px', color: 'white' }} id="mountNode"></Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Typography fontSize={12} color="#777777" marginBottom="30px">
          尝试拖拽不可能三角
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {side === 1 ? (
          <Typography fontSize={30} color="#FF6055" fontWeight={700} marginBottom="20px">
            高可扩展性 & 高去中心化
          </Typography>
        ) : null}
        {side === 2 ? (
          <Typography fontSize={30} color="#FFC64E" fontWeight={700} marginBottom="20px">
            高安全性 & 高可扩展性
          </Typography>
        ) : null}
        {side === 3 ? (
          <Typography fontSize={30} color="#5979ED" fontWeight={700} marginBottom="20px">
            高去中心化 & 高安全性
          </Typography>
        ) : null}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography fontSize={14} color="#0D0D0D" fontWeight={400} marginBottom="10px">
          情况分析
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {side === 1 ? (
          <Box>
            <Typography fontSize={14} color="#2F2F2F" fontWeight={400}>
              追求去中心化程度和安全性，采用更多的节点和更公平的出块方式，值得信赖。但为了允许低性能节点参与验证，协调全球网络延迟，导致每秒可处理的交易数较低，牺牲了性能。
            </Typography>
            <Typography fontSize={14} color="#2F2F2F" fontWeight={400}>
              代表区块链：BTC、ETH
            </Typography>
          </Box>
        ) : null}
        {side === 2 ? (
          <Box>
            <Typography fontSize={14} color="#2F2F2F" fontWeight={400}>
              追求安全性和可扩展性（即性能），往往采用少数超级节点进行通讯，超级节点拥有更强的性能和更好的网络环境，彼此之间能实现超高速的通讯。但参与门槛过高，牺牲了去中心化程度。
            </Typography>
            <Typography fontSize={14} color="#2F2F2F" fontWeight={400}>
              代表区块链：BSC、EOS、TRON
            </Typography>
          </Box>
        ) : null}
        {side === 3 ? (
          <Box>
            <Typography fontSize={14} color="#2F2F2F" fontWeight={400}>
              追求可扩展性（即性能）和去中心化程度，为保证去中心化采用了较多验证节点，为了追求性能提高了出块速度，或采用了特殊的共识机制。但提高出块速度容易导致大规模区块重组，更复杂的共识机制容易导致全网宕机等安全事故，牺牲了安全性。
            </Typography>
            <Typography fontSize={14} color="#2F2F2F" fontWeight={400}>
              代表区块链：Polygon、Solana
            </Typography>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
