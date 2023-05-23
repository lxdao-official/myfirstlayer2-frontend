import { useEffect, useState } from 'react';

import { Avatar, Box } from '@mui/material';
import { useTranslations } from 'next-intl';

const INIT_URL_DATA = ['https://avatars.githubusercontent.com/u/4056746?v=4', 'https://avatars.githubusercontent.com/u/36688525?v=4', 'https://avatars.githubusercontent.com/u/47655472?v=4', 'https://avatars.githubusercontent.com/u/125287205?v=4'];

export default function GithubAvatar(props) {
  const { owner = 'lxdao-official', repo = 'myfirstlayer2-frontend', path = '' } = props;
  const [avatarUrls, setAvatarUrls] = useState(INIT_URL_DATA);
  const t = useTranslations('GithubAvatar');

  useEffect(() => {
    // 在组件加载时获取贡献者头像
    fetchContributorAvatars(owner, repo, path)
      .then((urls) => setAvatarUrls(urls))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h2>{t('Contribute-to-this-chapter')}</h2>

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
    const commits = await response.json() || INIT_URL_DATA;
    const contributors = commits?.map((commit) => commit?.author);

    const avatarUrls = contributors?.map((contributor) => contributor?.avatar_url);

    return Array.from(new Set(avatarUrls));
  } catch (error) {
    console.error('Error fetching contributor avatars:', error);
    return [];
  }
}
