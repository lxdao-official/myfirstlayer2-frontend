import G6 from '@antv/g6';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

import { Box, Typography } from '@mui/material';

export default function ImpossibleTriangle() {
  const t = useTranslations('ImpossibleTriangle');
  const router = useRouter();
  const { locale } = router;
  const [dragNodes, setDragNodes] = useState([]);
  const dragNodesRef = useRef(null);
  dragNodesRef.current = dragNodes;
  const [side, setSide] = useState('');
  const sideRef = useRef(null);
  sideRef.current = side;

  const distanceOfPoint2Line = (point0, point1, point2) => {
    const x = point0.x;
    const y = point0.y;
    const x1 = point1.x;
    const y1 = point1.y;
    const x2 = point2.x;
    const y2 = point2.y;

    //triangle three side long
    var A = Math.abs(Math.sqrt(Math.pow(x - x1, 2) + Math.pow(y - y1, 2)));
    var B = Math.abs(Math.sqrt(Math.pow(x - x2, 2) + Math.pow(y - y2, 2)));
    var C = Math.abs(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)));

    var P = (A + B + C) / 2;
    var allArea = Math.abs(Math.sqrt(P * (P - A) * (P - B) * (P - C)));
    var dis = (2 * allArea) / C;
    return dis;
  };

  const leftOffset = 50;

  const center = { x: 138 + 69 + leftOffset, y: 94 + 80 };
  const center0 = { x: 138 + 69 + leftOffset, y: 94 + 70 };
  const center1 = { x: 185 + leftOffset, y: 94 + 100 };
  const center2 = { x: 138 + 82 + leftOffset, y: 94 + 80 };

  const [innerPoints, setInnerPoints] = useState([
    {
      x: 138 + 69 + leftOffset,
      y: 94,
    },
    { x: 138 + leftOffset, y: 94 + 120 },
    {
      x: 138 + 138 + leftOffset,
      y: 94 + 120,
    },
  ]);

  const oldInner = [
    {
      x: 138 + 69 + leftOffset,
      y: 94,
    },
    { x: 138 + leftOffset, y: 94 + 120 },
    {
      x: 138 + 138 + leftOffset,
      y: 94 + 120,
    },
  ];

  const outerTriangle = [
    {
      x: 138 + 69 + leftOffset,
      y: 50,
    },
    { x: 100 + leftOffset, y: 50 + 188 },
    {
      x: 100 + 216 + leftOffset,
      y: 50 + 188,
    },
  ];

  const innerNearOuterTriangle = [
    {
      x: 138 + 69 + leftOffset,
      y: 50 + 10,
    },
    { x: 100 + 10 + leftOffset, y: 50 + 188 - 5 },
    {
      x: 100 + 216 - 10 + leftOffset,
      y: 50 + 188 - 5,
    },
  ];

  const data = {
    nodes: [
      {
        id: '0',
        ...oldInner[0],
        size: 10,
        style: {
          fill: 'black',
          stroke: 'black',
        },
      },
      {
        id: '1',
        ...oldInner[1],
        size: 10,
        style: {
          fill: 'black',
          stroke: 'black',
        },
      },
      {
        id: '2',
        ...oldInner[2],
        size: 10,
        style: {
          fill: 'black',
          stroke: 'black',
        },
      },
      {
        id: '3',
        label: t('impossibleTriangle-content-11'),
        ...outerTriangle[0],
        size: 5,
        style: {
          fill: 'black',
          stroke: 'black',
        },
        labelCfg: {
          position: 'top',
          offset: 5,
          style: { fill: 'black', fontSize: 16, fontFamily: 'sucaijishikangkangti' },
        },
      },
      {
        id: '4',
        label: t('impossibleTriangle-content-12'),
        ...outerTriangle[1],
        size: 5,
        style: {
          fill: 'black',
          stroke: 'black',
        },
        labelCfg: {
          position: 'left',
          offset: 10,
          style: { fill: 'black', fontSize: 16, fontFamily: 'sucaijishikangkangti' },
        },
      },
      {
        id: '5',
        label: t('impossibleTriangle-content-13'),
        ...outerTriangle[2],
        size: 5,
        style: {
          fill: 'black',
          stroke: 'black',
        },
        labelCfg: {
          position: 'right',
          offset: 10,
          style: { fill: 'black', fontSize: 16, fontFamily: 'sucaijishikangkangti' },
        },
      },
    ],
    edges: [
      { source: '0', target: '1', style: { lineWidth: 5, stroke: 'black' } },
      { source: '1', target: '2', style: { lineWidth: 5, stroke: 'black' } },
      { source: '2', target: '0', style: { lineWidth: 5, stroke: 'black' } },
      { source: '3', target: '4', style: { lineWidth: 5, stroke: 'black' } },
      { source: '4', target: '5', style: { lineWidth: 5, stroke: 'black' } },
      { source: '5', target: '3', style: { lineWidth: 5, stroke: 'black' } },
    ],
  };

  const triggerDis = 30;

  const changeColor = (graph, index, color) => {
    setSide(index);
    const style = { style: { fill: color, stroke: color, fontSize: 28 } };
    const black = { style: { fill: 'black', stroke: 'black', fontSize: 20 } };

    graph.cfg.nodes.forEach((item) => {
      graph.updateItem(item, {
        labelCfg: {
          ...black,
        },
      });
    });
    graph.cfg.edges.forEach((item) => {
      graph.updateItem(item, {
        ...black,
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
    const graph = new G6.Graph({
      container: 'mountNode',
      width: 500,
      height: 300,
      animate: true,

      modes: {
        default: [
          {
            type: 'drag-node',
            enableDelegate: false,
            shouldBegin: (e) => {
              // 不允许拖拽 id 为 'node1' 的节点

              if (e.item && (e.item.getModel().id === '3' || e.item.getModel().id === '4' || e.item.getModel().id === '5')) {
                return false;
              }
              return true;
            },
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
      if (index === 3 || index === 4 || index === 5) {
        return;
      }
      const isIn = pointInTriangle(e.canvasX, e.canvasY);

      const nodeItem = e.item;
      if (!isIn) {
        // point is out of triangle
        graph.updateItem(nodeItem, {
          x: innerNearOuterTriangle[index].x,
          y: innerNearOuterTriangle[index].y,
        });
      }

      const p0 = graph.cfg.nodes[0]._cfg.model;
      const p1 = graph.cfg.nodes[1]._cfg.model;
      const p2 = graph.cfg.nodes[2]._cfg.model;
      const node0 = graph.cfg.nodes[0];
      const node1 = graph.cfg.nodes[1];
      const node2 = graph.cfg.nodes[2];
      if (nodeItem === node0) {
        const d012 = distanceOfPoint2Line(p0, outerTriangle[1], outerTriangle[2]);
        if (d012 < 140) {
          graph.updateItem(nodeItem, {
            x: center.x,
            y: center.y,
          });
          graph.updateItem(node1, {
            x: innerNearOuterTriangle[1].x,
            y: innerNearOuterTriangle[1].y,
          });
          graph.updateItem(node2, {
            x: innerNearOuterTriangle[2].x,
            y: innerNearOuterTriangle[2].y,
          });
        }
      } else if (nodeItem === node1) {
        const d102 = distanceOfPoint2Line(p1, outerTriangle[0], outerTriangle[2]);
        if (d102 < 140) {
          graph.updateItem(nodeItem, {
            x: center.x,
            y: center.y,
          });
          graph.updateItem(node0, {
            x: innerNearOuterTriangle[0].x,
            y: innerNearOuterTriangle[0].y,
          });
          graph.updateItem(node2, {
            x: innerNearOuterTriangle[2].x,
            y: innerNearOuterTriangle[2].y,
          });
        }
      } else {
        const d201 = distanceOfPoint2Line(p2, outerTriangle[0], outerTriangle[1]);
        if (d201 < 140) {
          graph.updateItem(nodeItem, {
            x: center.x,
            y: center.y,
          });
          graph.updateItem(node0, {
            x: innerNearOuterTriangle[0].x,
            y: innerNearOuterTriangle[0].y,
          });
          graph.updateItem(node1, {
            x: innerNearOuterTriangle[1].x,
            y: innerNearOuterTriangle[1].y,
          });
        }
      }

      const dis0 = twoPointDistance(p0, outerTriangle[0]);
      const dis1 = twoPointDistance(p1, outerTriangle[1]);
      const dis2 = twoPointDistance(p2, outerTriangle[2]);

      if (dis0 < triggerDis && dis1 < triggerDis && dis2 < triggerDis) {
        if (nodeItem === node0) {
          graph.updateItem(node2, center2); //2
          changeColor(graph, 1, '#FF6055');
        } else if (nodeItem === node1) {
          graph.updateItem(node0, center0); //0
          changeColor(graph, 2, '#FFC22F');
        } else {
          graph.updateItem(node1, center1); //1
          changeColor(graph, 3, '#5A7FF3');
        }
      } else {
        if (dis0 < triggerDis && dis1 < triggerDis) {
          graph.updateItem(node2, center2); //2
          changeColor(graph, 1, '#FF6055');
        } else if (dis1 < triggerDis && dis2 < triggerDis) {
          graph.updateItem(node0, center0); //0
          changeColor(graph, 2, '#FFC22F');
        } else if (dis0 < triggerDis && dis2 < triggerDis) {
          graph.updateItem(node1, center1); //1
          changeColor(graph, 3, '#5A7FF3');
        }

        innerPoints[index].y = nodeItem._cfg.model.y;
        innerPoints[index].x = nodeItem._cfg.model.x;
        setInnerPoints([...innerPoints]);
      }
      dragNodesRef.current.push(index);
      setDragNodes([...dragNodesRef.current]);
      if (dragNodesRef.current.length === 1) {
        setTimeout(() => {
          if (dragNodesRef.current.length === 1) {
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
    const black = { style: { fill: 'black', stroke: 'black', fontSize: 20, fontFamily: 'sucaijishikangkangti' } };
    graph.cfg.nodes.forEach((item) => {
      graph.updateItem(item, {
        labelCfg: {
          ...black,
        },
      });
    });
    return () => {
      graph.clear();
      graph.destroy();
    };
  }, [locale]);

  return (
    <Box sx={{ background: '#F6F6F6', paddingTop: '30px', paddingBottom: '16px', paddingInline: { xs: '5px', sm: '100px' }, marginBlock: '30px', borderRadius: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Box sx={{ paddingTop: '30px', display: 'flex', borderRadius: '10px', justifyContent: 'center', background: '#FFFFFF' }}>
        <Box sx={{ background: '#FFF', color: 'black', '&>canvas': { zoom: { xs: 0.5, md: 1 } } }} id="mountNode"></Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Typography fontSize={12} color="#777" marginBottom="18px">
          {t('impossibleTriangle-content-1')}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '19px' }}>
        {sideRef.current === 1 ? (
          <Typography sx={{ color: '#FF6055 !important', fontSize: { xs: '16px !important', sm: '32px !important' } }} fontWeight={700}>
            {t('impossibleTriangle-content-2')}
          </Typography>
        ) : null}
        {sideRef.current === 2 ? (
          <Typography sx={{ color: '#FFC22F !important', fontSize: { xs: '16px !important', sm: '32px !important' } }} fontWeight={700}>
            {t('impossibleTriangle-content-3')}
          </Typography>
        ) : null}
        {sideRef.current === 3 ? (
          <Typography sx={{ color: '#5A7FF3 !important', fontSize: { xs: '16px !important', sm: '32px !important' } }} fontWeight={700}>
            {t('impossibleTriangle-content-4')}
          </Typography>
        ) : null}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingInline: '15px' }}>
        {sideRef.current === 1 ? (
          <Box>
            <Typography sx={{ color: '#5f6d7e !important', fontSize: '14px !important', wordBreak: 'break-word !important' }} fontWeight={400}>
              {t('impossibleTriangle-content-5')}
            </Typography>
            <Typography sx={{ color: '#5f6d7e !important', fontSize: '14px !important', wordBreak: 'break-word !important' }} fontWeight={400}>
              {t('impossibleTriangle-content-6')}
            </Typography>
          </Box>
        ) : null}
        {sideRef.current === 2 ? (
          <Box>
            <Typography sx={{ color: '#5f6d7e !important', fontSize: '14px !important', wordBreak: 'break-word !important' }} fontWeight={400}>
              {t('impossibleTriangle-content-7')}
            </Typography>
            <Typography sx={{ color: '#5f6d7e !important', fontSize: '14px !important', wordBreak: 'break-word !important' }} fontWeight={400}>
              {t('impossibleTriangle-content-8')}
            </Typography>
          </Box>
        ) : null}
        {sideRef.current === 3 ? (
          <Box>
            <Typography sx={{ color: '#5f6d7e !important', fontSize: '14px !important', wordBreak: 'break-word !important' }} fontWeight={400}>
              {t('impossibleTriangle-content-9')}{' '}
            </Typography>
            <Typography sx={{ color: '#5f6d7e !important', fontSize: '14px !important', wordBreak: 'break-word !important' }} fontWeight={400}>
              {t('impossibleTriangle-content-10')}
            </Typography>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
