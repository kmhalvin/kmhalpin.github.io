(this["webpackJsonpimage-transform"]=this["webpackJsonpimage-transform"]||[]).push([[0],{95:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(10),c=t.n(r),s=t(41),o=t(7),l=t(42),u=t(18),m=t(33),g=t(125),d=t(129),j=t(133),x=t(130),b=t(134),v=t(135),h=t(132);m.Texture.isTextureUrl=function(e){return e&&/\.(jpg|jpeg|png|ogv|webm|mp4|bmp)$/i.test(e.split("?")[0])};var p=new Image,_=function(e,n){p.onload=function(){var n=Math.min(window.innerWidth/360*300,360);e.setAttribute("width",n),e.setAttribute("height",n*(p.height/p.width))},p.src=n},O=t(6),f=[{url:"/sample/lena_gray.bmp",name:"Lena"},{url:"/sample/barbara_gray.bmp",name:"Barbara"},{url:"/sample/Chrysanthemum.jpg",name:"Chrysanthemum"},{url:"/sample/Desert.jpg",name:"Desert"},{url:"/sample/Hydrangeas.jpg",name:"Hydrangeas"},{url:"/sample/Jellyfish.jpg",name:"Jellyfish"},{url:"/sample/Koala.jpg",name:"Koala"},{url:"/sample/Lighthouse.jpg",name:"Lighthouse"},{url:"/sample/Penguins.jpg",name:"Penguins"},{url:"/sample/Tulips.jpg",name:"Tulips"}],P=Object(a.createRef)(),y=function(e){var n=e.mask,t=Object(a.useState)(null),i=Object(u.a)(t,2),r=i[0],c=i[1],s=Object(a.useState)(f[0].url),o=Object(u.a)(s,2),p=o[0],y=o[1],w=Object(a.useState)({u_mask:n,u_doGray:!1}),k=Object(u.a)(w,2),C=k[0],D=k[1];return r instanceof m.Canvas&&(r.loadTexture("u_img",p),r.setUniforms(C),_(P.current,p)),Object(a.useEffect)((function(){D(Object(l.a)(Object(l.a)({},C),{},{u_mask:n})),c(new m.Canvas(P.current,{vertexString:"\nattribute vec2 a_position;\nattribute vec2 a_texcoord;\nattribute vec2 a_normal;\nattribute vec2 a_color;\n\nvarying vec2 v_texcoord;\nvarying vec2 v_normal;\nvarying vec2 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0.0, 1.0);\n\n  v_texcoord = a_texcoord;\n  v_normal = a_normal;\n  v_color = a_color;\n}\n",fragmentString:"\nprecision lowp float;\n\nuniform sampler2D u_img;\nuniform vec2 u_resolution;\nuniform float u_mask;\n\nuniform bool u_doGray;\n\nvarying vec2 v_texcoord;\n\nvec4 getPixel(sampler2D img, vec2 pixel) {\n  if(u_doGray) {\n    return vec4(vec3(dot(texture2D(img, pixel).rgb, vec3(1.0/3.0))), 1.0);\n  } else {\n    return texture2D(img, pixel);\n  }\n}\n\nvoid main() {\n  vec2 canvasPixel = vec2(1.0) / u_resolution;\n\n  vec4 n[9];\n  n[0] = getPixel(u_img, v_texcoord + canvasPixel * vec2(-1, -1));\n  n[1] = getPixel(u_img, v_texcoord + canvasPixel * vec2( 0, -1));\n  n[2] = getPixel(u_img, v_texcoord + canvasPixel * vec2( 1, -1));\n  n[3] = getPixel(u_img, v_texcoord + canvasPixel * vec2(-1,  0));\n  n[4] = getPixel(u_img, v_texcoord + canvasPixel * vec2( 0,  0));\n  n[5] = getPixel(u_img, v_texcoord + canvasPixel * vec2( 1,  0));\n  n[6] = getPixel(u_img, v_texcoord + canvasPixel * vec2(-1,  1));\n  n[7] = getPixel(u_img, v_texcoord + canvasPixel * vec2( 0,  1));\n  n[8] = getPixel(u_img, v_texcoord + canvasPixel * vec2( 1,  1));\n\n  vec4 sobel_x = n[2] + (u_mask * n[5]) + n[8] - (n[0] + (u_mask * n[3]) + n[6]);\n  vec4 sobel_y = n[0] + (u_mask * n[1]) + n[2] - (n[6] + (u_mask * n[7]) + n[8]);\n  vec4 sobel = sqrt((sobel_x * sobel_x) + (sobel_y * sobel_y));\n\n  gl_FragColor = vec4(sobel.rgb, 1);\n}\n"}));var e=function(){return _(P.current,p)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),r instanceof m.Canvas&&r.destroy()}}),[n]),Object(O.jsxs)(g.a,{container:!0,justifyContent:"center",alignItems:"center",spacing:2,children:[Object(O.jsx)(g.a,{item:!0,children:Object(O.jsx)("div",{style:{width:"100%",height:"100%"},children:Object(O.jsx)("canvas",{style:{maxHeight:"360px",maxWidth:"360px"},ref:P})})}),Object(O.jsx)(g.a,{item:!0,xs:10,sm:10,md:10,lg:6,xl:4,children:Object(O.jsxs)(g.a,{container:!0,justifyContent:"center",alignItems:"center",spacing:2,children:[Object(O.jsx)(g.a,{item:!0,xs:8,children:Object(O.jsxs)(d.a,{variant:"outlined",style:{width:"100%"},children:[Object(O.jsx)(j.a,{id:"demo-simple-select-outlined-label",children:"Pilih gambar"}),Object(O.jsx)(x.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:p,onChange:function(e){return y(e.target.value)},label:"Pilih gambar",children:f.map((function(e,n){return Object(O.jsxs)(b.a,{value:e.url,children:[Object(O.jsx)("img",{src:e.url,alt:e.name,height:25})," ",e.name]},n)}))})]})}),Object(O.jsx)(g.a,{item:!0,xs:4,children:Object(O.jsx)(v.a,{control:Object(O.jsx)(h.a,{checked:C.u_doGray,onChange:function(e){return D(Object(l.a)(Object(l.a)({},C),{},{u_doGray:e.target.checked}))},inputProps:{"aria-label":"primary checkbox"}}),label:"Hitam putih"})})]})})]})};y.defaultProps={mask:2};var w=y,k=function(){return Object(O.jsx)("p",{children:"soon"})};var C=function(){return Object(O.jsxs)(s.a,{children:[Object(O.jsxs)("nav",{children:[Object(O.jsx)(s.b,{to:"edge-detection-sobel",children:"Edge Detection (Sobel)"})," ",Object(O.jsx)(s.b,{to:"edge-detection-prewitt",children:"Edge Detection (Prewitt)"})," ",Object(O.jsx)(s.b,{to:"hough-transformation",children:"Hough Transformation"})]}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"/",element:Object(O.jsx)("p",{children:"Welcome"})}),Object(O.jsx)(o.a,{path:"edge-detection-sobel",element:Object(O.jsx)(w,{mask:2})}),Object(O.jsx)(o.a,{path:"edge-detection-prewitt",element:Object(O.jsx)(w,{mask:1})}),Object(O.jsx)(o.a,{path:"hough-transformation",element:Object(O.jsx)(k,{})})]})]})},D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,137)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root")),D()}},[[95,1,2]]]);
//# sourceMappingURL=main.2073379e.chunk.js.map