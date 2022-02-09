import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { makeStyles } from '@mui/styles';
import img1 from '../image/pigfamily/1.jpeg'
import img2 from '../image/pigfamily/2.jpeg'
import img3 from '../image/pigfamily/3.jpeg'
import img4 from '../image/pigfamily/4.jpeg'
import img5 from '../image/pigfamily/5.jpeg'
import img6 from '../image/pigfamily/6.jpeg'
import img7 from '../image/pigfamily/7.jpeg'
import img8 from '../image/pigfamily/8.jpeg'
import img9 from '../image/pigfamily/9.jpeg'
import img10 from '../image/pigfamily/10.png'
import img11 from '../image/pigfamily/11.jpeg'
import img12 from '../image/pigfamily/12.jpeg'
import Bigpig from '../image/Bigpig04.png'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';


const useSytles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    }
  },
  list: {
    width: 500,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    }
  },
}));

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function PigFamily() {
  const classes = useSytles();
  const [width, setWidth] = React.useState(window.innerWidth)

  const getWidth = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', getWidth)
    return () => {
      window.removeEventListener('resize', getWidth)
    }
  }, [width]);

  return (
    <Box className={classes.container}>
      <Box></Box>
      <Box className={classes.list}>
        <ImageList
          variant="quilted"
          cols={4}
          rowHeight={121}
          style={{ m: 0 }}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" >Upload Image</Button>
        </Box>
      </Box>
      {width > 900 && <img className={classes.img} src={Bigpig} alt='Bigpig03' />}
    </Box>
  );
}

const itemData = [
  {
    img: img1,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: img2,
    title: 'Burger',
  },
  {
    img: img3,
    title: 'Camera',
  },
  {
    img: img4,
    title: 'Coffee',
    cols: 2,
  },
  {
    img: img5,
    title: 'Hats',
    cols: 2,
  },
  {
    img: img6,
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: img7,
    title: 'Basketball',
  },
  {
    img: img8,
    title: 'Fern',
  },
  {
    img: img9,
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: img10,
    title: 'Tomato basil',
  },
  {
    img: img11,
    title: 'Sea star',
  },
  {
    img: img12,
    title: 'Bike',
    cols: 2,
  },
];
