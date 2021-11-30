import React, { createRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from 'glsl-canvas-js/dist/cjs/glsl';
import {
  Grid,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { resize } from '../utils';

const images = [
  {
    url: '/sample/lena_gray.bmp',
    name: 'Lena',
  },
  {
    url: '/sample/barbara_gray.bmp',
    name: 'Barbara',
  },
  {
    url: '/sample/Chrysanthemum.jpg',
    name: 'Chrysanthemum',
  },
  {
    url: '/sample/Desert.jpg',
    name: 'Desert',
  },
  {
    url: '/sample/Hydrangeas.jpg',
    name: 'Hydrangeas',
  },
  {
    url: '/sample/Jellyfish.jpg',
    name: 'Jellyfish',
  },
  {
    url: '/sample/Koala.jpg',
    name: 'Koala',
  },
  {
    url: '/sample/Lighthouse.jpg',
    name: 'Lighthouse',
  },
  {
    url: '/sample/Penguins.jpg',
    name: 'Penguins',
  },
  {
    url: '/sample/Tulips.jpg',
    name: 'Tulips',
  },
];

const vertex = `
attribute vec2 a_position;
attribute vec2 a_texcoord;
attribute vec2 a_normal;
attribute vec2 a_color;

varying vec2 v_texcoord;
varying vec2 v_normal;
varying vec2 v_color;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);

  v_texcoord = a_texcoord;
  v_normal = a_normal;
  v_color = a_color;
}
`;

const fragment = `
precision lowp float;

uniform sampler2D u_img;
uniform vec2 u_resolution;
uniform float u_mask;

uniform bool u_doGray;

varying vec2 v_texcoord;

vec4 getPixel(sampler2D img, vec2 pixel) {
  if(u_doGray) {
    return vec4(vec3(dot(texture2D(img, pixel).rgb, vec3(1.0/3.0))), 1.0);
  } else {
    return texture2D(img, pixel);
  }
}

void main() {
  vec2 canvasPixel = vec2(1.0) / u_resolution;

  vec4 n[9];
  n[0] = getPixel(u_img, v_texcoord + canvasPixel * vec2(-1, -1));
  n[1] = getPixel(u_img, v_texcoord + canvasPixel * vec2( 0, -1));
  n[2] = getPixel(u_img, v_texcoord + canvasPixel * vec2( 1, -1));
  n[3] = getPixel(u_img, v_texcoord + canvasPixel * vec2(-1,  0));
  n[4] = getPixel(u_img, v_texcoord + canvasPixel * vec2( 0,  0));
  n[5] = getPixel(u_img, v_texcoord + canvasPixel * vec2( 1,  0));
  n[6] = getPixel(u_img, v_texcoord + canvasPixel * vec2(-1,  1));
  n[7] = getPixel(u_img, v_texcoord + canvasPixel * vec2( 0,  1));
  n[8] = getPixel(u_img, v_texcoord + canvasPixel * vec2( 1,  1));

  vec4 sobel_x = n[2] + (u_mask * n[5]) + n[8] - (n[0] + (u_mask * n[3]) + n[6]);
  vec4 sobel_y = n[0] + (u_mask * n[1]) + n[2] - (n[6] + (u_mask * n[7]) + n[8]);
  vec4 sobel = sqrt((sobel_x * sobel_x) + (sobel_y * sobel_y));

  gl_FragColor = vec4(sobel.rgb, 1);
}
`;

const CanvasRef = createRef();

const EdgeDetection = ({ mask }) => {
  const [canvas, setCanvas] = useState(null);
  const [image, setImage] = useState(images[0].url);
  const [uniform, setUniform] = useState({
    u_mask: mask,
    u_doGray: false,
  });

  if (canvas instanceof Canvas) {
    canvas.loadTexture('u_img', image);
    canvas.setUniforms(uniform);
    resize(CanvasRef.current, image);
  }

  useEffect(() => {
    setUniform({ ...uniform, u_mask: mask });

    setCanvas(new Canvas(CanvasRef.current, {
      vertexString: vertex,
      fragmentString: fragment,
    }));

    const handleResize = () => resize(CanvasRef.current, image);
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas instanceof Canvas) canvas.destroy();
    };
  }, [mask]);

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item>
        <div style={{ width: '100%', height: '100%' }}>
          <canvas
            style={{ maxHeight: '360px', maxWidth: '360px' }}
            ref={CanvasRef}
          />
        </div>
      </Grid>
      <Grid item xs={10} sm={10} md={10} lg={6} xl={4}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={8}>
            <FormControl
              variant="outlined"
              style={{ width: '100%' }}
            >
              <InputLabel id="demo-simple-select-outlined-label">Pilih gambar</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                label="Pilih gambar"
              >
                {images.map((v, idx) => (
                  <MenuItem key={idx} value={v.url}>
                    <img src={v.url} alt={v.name} height={25} />
                    {' '}
                    {v.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={uniform.u_doGray}
                  onChange={(e) => setUniform({
                    ...uniform,
                    u_doGray: e.target.checked,
                  })}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              )}
              label="Hitam putih"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

EdgeDetection.defaultProps = {
  mask: 2.0,
};

EdgeDetection.propTypes = {
  mask: PropTypes.number,
};

export default EdgeDetection;