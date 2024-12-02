import { Typography, Box, Divider, Grid } from '@mui/material';
import Link from 'next/link';
import { truncateTitle } from '@/app/utils/utils'; // Utiliza la misma función de truncado

const NewsListSection = ({ newsItems = [] }) => {
  return (
    <Box className="news-list-section pt-4 pb-4">
      {newsItems.length > 0 ? (
        <Grid container spacing={3}>
          {newsItems.map((news, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Link href={`/noticias/${news.slug}`}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mb: 2,
                    padding: 2,
                    cursor: 'pointer',
                    '&:hover': { backgroundColor: '#f9f9f9' },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      component="img"
                      sx={{
                        width: 100,
                        height: 100,
                        objectFit: 'cover',
                        borderRadius: 2,
                      }}
                      src={
                        news._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/default-image.jpg'
                      }
                      alt={news.title.rendered}
                      className="zoom-image"
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ fontSize: '14pt', fontWeight: 'bold' }}>
                        {truncateTitle(news.title.rendered, 100)}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {news.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                          mt: 1,
                          color: '#666',
                          fontSize: '12px',
                          lineHeight: '1.4',
                        }}
                      >
                        {news._embedded['wp:term'][0].map((cat) => cat.name).join(', ')}
                      </Typography>
                    </Box>
                  </Box>
                  {index < newsItems.length - 1 && <Divider sx={{ mt: 2 }} />}
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      ) : (
        <p>Cargando noticias...</p>
      )}
    </Box>
  );
};

export default NewsListSection;
