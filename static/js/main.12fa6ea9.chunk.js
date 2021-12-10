(this["webpackJsonpimage-transform"]=this["webpackJsonpimage-transform"]||[]).push([[0],{100:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(12),l=t.n(i),c=t(34),o=t(8),s=t(6),u=t(14),b=t(18),j=t(132),d=t(143),m=t(136),_=t(144),v=t(140),x=t(145),g=t(138),h=t(141);b.Texture.isTextureUrl=function(e){return e&&/\.(jpg|jpeg|png|ogv|webm|mp4|bmp)$/i.test(e.split("?")[0])};var O=new Image,p=function(e,n){O.onload=function(){var n=Math.min(window.innerWidth/360*300,360);e.setAttribute("style","width: ".concat(n,"px; height: ").concat(n*(O.height/O.width),"px;"))},O.src=n},k=[{url:"/sample/lena_gray.bmp",name:"Lena"},{url:"/sample/barbara_gray.bmp",name:"Barbara"},{url:"/sample/Chrysanthemum.jpg",name:"Chrysanthemum"},{url:"/sample/Desert.jpg",name:"Desert"},{url:"/sample/Hydrangeas.jpg",name:"Hydrangeas"},{url:"/sample/Jellyfish.jpg",name:"Jellyfish"},{url:"/sample/Koala.jpg",name:"Koala"},{url:"/sample/Lighthouse.jpg",name:"Lighthouse"},{url:"/sample/Penguins.jpg",name:"Penguins"},{url:"/sample/Tulips.jpg",name:"Tulips"}],f=t(2),y=Object(r.createRef)(),P=function(e){var n,t=e.mask,a=Object(r.useState)(null),i=Object(u.a)(a,2),l=i[0],c=i[1],o=Object(r.useState)(k[0].url),O=Object(u.a)(o,2),P=O[0],C=O[1],w=Object(r.useState)({u_mask:t,u_doGray:!1,u_slider:0}),N=Object(u.a)(w,2),D=N[0],I=N[1];return l instanceof b.Canvas&&(l.loadTexture("u_img",P),l.setUniforms(D),p(y.current,P)),Object(r.useEffect)((function(){I(Object(s.a)(Object(s.a)({},D),{},{u_mask:t})),c(new b.Canvas(y.current,{vertexString:"\nattribute vec2 a_position;\nattribute vec2 a_texcoord;\nattribute vec2 a_normal;\nattribute vec2 a_color;\n\nvarying vec2 v_texcoord;\nvarying vec2 v_normal;\nvarying vec2 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0.0, 1.0);\n\n  v_texcoord = a_texcoord;\n  v_normal = a_normal;\n  v_color = a_color;\n}\n",fragmentString:"\nprecision lowp float;\n\nuniform sampler2D u_img;\nuniform vec2 u_resolution;\nuniform float u_mask;\nuniform float u_slider;\n\nuniform bool u_doGray;\n\nvarying vec2 v_texcoord;\n\nvec4 getPixel(sampler2D img, vec2 pixel) {\n  if(u_doGray) {\n    return vec4(vec3(dot(texture2D(img, pixel).rgb, vec3(1.0/3.0))), 1.0);\n  } else {\n    return texture2D(img, pixel);\n  }\n}\n\nvoid main() {\n  vec2 canvasPixel = vec2(1.0) / u_resolution;\n\n  vec4 n[9];\n  n[0] = getPixel(u_img, v_texcoord + canvasPixel * vec2(-1, -1));\n  n[1] = getPixel(u_img, v_texcoord + canvasPixel * vec2( 0, -1));\n  n[2] = getPixel(u_img, v_texcoord + canvasPixel * vec2( 1, -1));\n  n[3] = getPixel(u_img, v_texcoord + canvasPixel * vec2(-1,  0));\n  n[4] = getPixel(u_img, v_texcoord + canvasPixel * vec2( 0,  0));\n  n[5] = getPixel(u_img, v_texcoord + canvasPixel * vec2( 1,  0));\n  n[6] = getPixel(u_img, v_texcoord + canvasPixel * vec2(-1,  1));\n  n[7] = getPixel(u_img, v_texcoord + canvasPixel * vec2( 0,  1));\n  n[8] = getPixel(u_img, v_texcoord + canvasPixel * vec2( 1,  1));\n  \n  if (v_texcoord.x >= u_slider / u_resolution.x) {\n    vec4 sobel_x = n[2] + (u_mask * n[5]) + n[8] - (n[0] + (u_mask * n[3]) + n[6]);\n    vec4 sobel_y = n[0] + (u_mask * n[1]) + n[2] - (n[6] + (u_mask * n[7]) + n[8]);\n    vec4 sobel = sqrt((sobel_x * sobel_x) + (sobel_y * sobel_y));\n\n    gl_FragColor = vec4(sobel.rgb, 1);\n  } else {\n    gl_FragColor = n[4];\n  }\n}\n"}));var e=function(){return p(y.current,P)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),l instanceof b.Canvas&&l.destroy()}}),[t]),Object(f.jsxs)(j.a,{container:!0,justifyContent:"center",alignItems:"center",spacing:2,children:[Object(f.jsxs)(j.a,{item:!0,children:[Object(f.jsx)("div",{style:{width:"100%",height:"100%"},children:Object(f.jsx)("canvas",{ref:y})}),Object(f.jsx)(d.a,{color:"secondary",value:D.u_slider,valueLabelDisplay:"auto",step:1,min:0,max:(null===(n=y.current)||void 0===n?void 0:n.width)||0,onChange:function(e,n){return n>=0&&I(Object(s.a)(Object(s.a)({},D),{},{u_slider:n}))}})]}),Object(f.jsx)(j.a,{item:!0,xs:10,sm:10,md:10,lg:6,xl:4,children:Object(f.jsxs)(j.a,{container:!0,justifyContent:"center",alignItems:"center",spacing:2,children:[Object(f.jsx)(j.a,{item:!0,xs:8,children:Object(f.jsxs)(m.a,{variant:"outlined",style:{width:"100%"},children:[Object(f.jsx)(_.a,{id:"demo-simple-select-outlined-label",children:"Pilih gambar"}),Object(f.jsx)(v.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:P,onChange:function(e){return C(e.target.value)},label:"Pilih gambar",children:k.map((function(e,n){return Object(f.jsxs)(x.a,{value:e.url,children:[Object(f.jsx)("img",{src:e.url,alt:e.name,height:25})," ",e.name]},n)}))})]})}),Object(f.jsx)(j.a,{item:!0,xs:4,children:Object(f.jsx)(g.a,{control:Object(f.jsx)(h.a,{checked:D.u_doGray,onChange:function(e){return I(Object(s.a)(Object(s.a)({},D),{},{u_doGray:e.target.checked}))},inputProps:{"aria-label":"primary checkbox"}}),label:"Hitam putih"})})]})})]})};P.defaultProps={mask:2};var C=P,w=function(){return Object(f.jsx)("p",{children:"soon"})},N=t(139),D=t(101),I=Object(r.createRef)();var S=function(){var e,n=Object(r.useState)(null),t=Object(u.a)(n,2),a=t[0],i=t[1],l=Object(r.useState)(k[0].url),c=Object(u.a)(l,2),o=c[0],O=c[1],y=Object(r.useState)({u_doGray:!1,u_doNegative:!1,u_doBinary:!1,u_binaryT:120,u_brightness:0,u_slider:0}),P=Object(u.a)(y,2),C=P[0],w=P[1];return a instanceof b.Canvas&&(a.loadTexture("u_img",o),a.setUniforms(Object(s.a)(Object(s.a)({},C),{},{u_binaryT:C.u_binaryT/255,u_brightness:C.u_brightness/255})),p(I.current,o)),Object(r.useEffect)((function(){i(new b.Canvas(I.current,{vertexString:"\nattribute vec2 a_position;\nattribute vec2 a_texcoord;\nattribute vec2 a_normal;\nattribute vec2 a_color;\n\nvarying vec2 v_texcoord;\nvarying vec2 v_normal;\nvarying vec2 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0.0, 1.0);\n\n  v_texcoord = a_texcoord;\n  v_normal = a_normal;\n  v_color = a_color;\n}\n",fragmentString:"\nprecision lowp float;\n\nuniform sampler2D u_img;\n\nuniform vec2 u_resolution;\n\nuniform bool u_doGray;\nuniform bool u_doNegative;\nuniform bool u_doBinary;\n\nuniform float u_slider;\nuniform float u_binaryT;\nuniform float u_brightness;\n\nvarying vec2 v_texcoord;\n\nfloat rgbtobw (vec3 imgin) {\n  return dot(imgin, vec3(1.0/3.0));\n}\n\nvec3 clipping (vec3 imgin) {\n  return max(min(imgin, 1.0), 0.0);\n}\n\nvec3 brightnessfunc (vec3 imgin) {\n  return clipping(imgin + u_brightness);\n}\n\nvec3 binaryfunc (vec3 imgin) {\n  float gray = rgbtobw(imgin);\n  if(gray < u_binaryT){\n    return vec3(0.0);\n  } else {\n    return vec3(1.0);\n  }\n}\n\nvec3 negativefunc (vec3 imgin) {\n  return 1.0 - imgin;\n}\n\nvoid main(){\n  vec4 texture = texture2D(u_img, v_texcoord);\n  vec3 rgb = texture.rgb;\n\n  if(u_doGray){\n    rgb = vec3(rgbtobw(rgb));\n  }\n\n  rgb = brightnessfunc(rgb);\n\n  if(u_doBinary){\n    rgb = binaryfunc(rgb);\n  }\n\n  if(u_doNegative){\n    rgb = negativefunc(rgb);\n  }\n\n  if (v_texcoord.x >= u_slider / u_resolution.x) {\n    gl_FragColor = vec4(rgb, texture.a);\n  } else {\n    gl_FragColor = vec4(texture);\n  }\n}\n"}));var e=function(){return p(I.current,o)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),a instanceof b.Canvas&&a.destroy()}}),[]),Object(f.jsxs)(j.a,{container:!0,justifyContent:"center",alignItems:"center",spacing:2,children:[Object(f.jsxs)(j.a,{item:!0,children:[Object(f.jsx)("div",{style:{width:"100%",height:"100%"},children:Object(f.jsx)("canvas",{ref:I})}),Object(f.jsx)(d.a,{color:"secondary",value:C.u_slider,valueLabelDisplay:"auto",step:1,min:0,max:(null===(e=I.current)||void 0===e?void 0:e.width)||0,onChange:function(e,n){return n>=0&&w(Object(s.a)(Object(s.a)({},C),{},{u_slider:n}))}})]}),Object(f.jsx)(j.a,{item:!0,xs:10,sm:10,md:10,lg:6,xl:4,children:Object(f.jsxs)(N.a,{children:[Object(f.jsxs)(m.a,{variant:"outlined",children:[Object(f.jsx)(_.a,{id:"demo-simple-select-outlined-label",children:"Pilih gambar"}),Object(f.jsx)(v.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:o,onChange:function(e){return O(e.target.value)},label:"Pilih gambar",children:k.map((function(e,n){return Object(f.jsxs)(x.a,{value:e.url,children:[Object(f.jsx)("img",{src:e.url,alt:e.name,height:25})," ",e.name]},n)}))})]}),Object(f.jsx)(g.a,{control:Object(f.jsx)(h.a,{checked:C.u_doGray,onChange:function(e){return w(Object(s.a)(Object(s.a)({},C),{},{u_doGray:e.target.checked}))},inputProps:{"aria-label":"primary checkbox"}}),label:"Hitam putih"}),Object(f.jsx)(g.a,{control:Object(f.jsx)(h.a,{checked:C.u_doNegative,onChange:function(e){return w(Object(s.a)(Object(s.a)({},C),{},{u_doNegative:e.target.checked}))},inputProps:{"aria-label":"primary checkbox"}}),label:"Negatif"}),Object(f.jsx)(g.a,{control:Object(f.jsx)(h.a,{checked:C.u_doBinary,onChange:function(e){return w(Object(s.a)(Object(s.a)({},C),{},{u_doBinary:e.target.checked}))},inputProps:{"aria-label":"primary checkbox"}}),label:"Binerisasi"}),Object(f.jsx)(d.a,{disabled:!C.u_doBinary,color:"secondary",value:C.u_binaryT,valueLabelDisplay:"auto",step:1,min:0,max:255,onChange:function(e,n){return n>=0&&n<=255&&w(Object(s.a)(Object(s.a)({},C),{},{u_binaryT:n}))}}),Object(f.jsxs)(m.a,{children:[Object(f.jsx)(D.a,{id:"brightness-slider",gutterBottom:!0,children:"Kecerahan"}),Object(f.jsx)(d.a,{"aria-labelledby":"brightness-slider",value:C.u_brightness,valueLabelDisplay:"auto",step:1,min:0,max:255,onChange:function(e,n){return n>=0&&n<=255&&w(Object(s.a)(Object(s.a)({},C),{},{u_brightness:n}))}})]})]})})]})},F=t(137),B={normal:[0,0,0,0,1,0,0,0,0],gaussianBlur:[.045,.122,.045,.122,.332,.122,.045,.122,.045],gaussianBlur2:[1,2,1,2,4,2,1,2,1],gaussianBlur3:[0,1,0,1,1,1,0,1,0],unsharpen:[-1,-1,-1,-1,9,-1,-1,-1,-1],sharpness:[0,-1,0,-1,5,-1,0,-1,0],sharpen:[-1,-1,-1,-1,16,-1,-1,-1,-1],edgeDetect:[-.125,-.125,-.125,-.125,1,-.125,-.125,-.125,-.125],edgeDetect2:[-1,-1,-1,-1,8,-1,-1,-1,-1],edgeDetect3:[-5,0,0,0,0,0,0,0,5],edgeDetect4:[-1,-1,-1,0,0,0,1,1,1],edgeDetect5:[-1,-1,-1,2,2,2,-1,-1,-1],edgeDetect6:[-5,-5,-5,-5,39,-5,-5,-5,-5],sobelHorizontal:[1,2,1,0,0,0,-1,-2,-1],sobelVertical:[1,0,-1,2,0,-2,1,0,-1],previtHorizontal:[1,1,1,0,0,0,-1,-1,-1],previtVertical:[1,0,-1,1,0,-1,1,0,-1],boxBlur:[.111,.111,.111,.111,.111,.111,.111,.111,.111],triangleBlur:[.0625,.125,.0625,.125,.25,.125,.0625,.125,.0625],emboss:[-2,-1,0,-1,1,1,0,1,2]},T=Object(r.createRef)();var L=function(){var e,n=Object(r.useState)(null),t=Object(u.a)(n,2),a=t[0],i=t[1],l=Object(r.useState)(k[0].url),c=Object(u.a)(l,2),o=c[0],O=c[1],y=Object(r.useState)("normal"),P=Object(u.a)(y,2),C=P[0],w=P[1],N=Object(r.useState)({c_kernel_0:B.normal[0],c_kernel_1:B.normal[1],c_kernel_2:B.normal[2],c_kernel_3:B.normal[3],c_kernel_4:B.normal[4],c_kernel_5:B.normal[5],c_kernel_6:B.normal[6],c_kernel_7:B.normal[7],c_kernel_8:B.normal[8]}),I=Object(u.a)(N,2),S=I[0],L=I[1],G=Object(r.useState)({u_slider:0,u_doGray:!0,"u_kernel[0]":B.normal[0],"u_kernel[1]":B.normal[1],"u_kernel[2]":B.normal[2],"u_kernel[3]":B.normal[3],"u_kernel[4]":B.normal[4],"u_kernel[5]":B.normal[5],"u_kernel[6]":B.normal[6],"u_kernel[7]":B.normal[7],"u_kernel[8]":B.normal[8],u_kernelWeight:B.normal[0]+B.normal[1]+B.normal[2]+B.normal[3]+B.normal[4]+B.normal[5]+B.normal[6]+B.normal[7]+B.normal[8]}),E=Object(u.a)(G,2),z=E[0],H=E[1];function W(){w("custom"),L({c_kernel_0:z["u_kernel[0]"],c_kernel_1:z["u_kernel[1]"],c_kernel_2:z["u_kernel[2]"],c_kernel_3:z["u_kernel[3]"],c_kernel_4:z["u_kernel[4]"],c_kernel_5:z["u_kernel[5]"],c_kernel_6:z["u_kernel[6]"],c_kernel_7:z["u_kernel[7]"],c_kernel_8:z["u_kernel[8]"]})}return a instanceof b.Canvas&&(a.loadTexture("u_img",o),a.setUniforms(Object(s.a)(Object(s.a)({},z),{},{u_kernelWeight:z.u_kernelWeight<=0?1:z.u_kernelWeight})),p(T.current,o)),Object(r.useEffect)((function(){i(new b.Canvas(T.current,{vertexString:"\nattribute vec2 a_position;\nattribute vec2 a_texcoord;\nattribute vec2 a_normal;\nattribute vec2 a_color;\n\nvarying vec2 v_texcoord;\nvarying vec2 v_normal;\nvarying vec2 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0.0, 1.0);\n\n  v_texcoord = a_texcoord;\n  v_normal = a_normal;\n  v_color = a_color;\n}\n",fragmentString:"\nprecision lowp float;\n\nuniform sampler2D u_img;\nuniform vec2 u_resolution;\nuniform float u_kernel[9];\nuniform float u_kernelWeight;\nuniform float u_slider;\n\nuniform bool u_doGray;\n\nvarying vec2 v_texcoord;\n\nvec4 getPixel(sampler2D img, vec2 pixel) {\n  if(u_doGray) {\n    return vec4(vec3(dot(texture2D(img, pixel).rgb, vec3(1.0/3.0))), 1.0);\n  } else {\n    return texture2D(img, pixel);\n  }\n}\n\nvoid main() {\n  vec2 canvasPixel = vec2(1.0) / u_resolution;\n\n  if (v_texcoord.x >= u_slider / u_resolution.x) {\n    vec4 convolution =\n      getPixel(u_img, v_texcoord + canvasPixel * vec2(-1, -1)) * u_kernel[0] +\n      getPixel(u_img, v_texcoord + canvasPixel * vec2( 0, -1)) * u_kernel[1] +\n      getPixel(u_img, v_texcoord + canvasPixel * vec2( 1, -1)) * u_kernel[2] +\n      getPixel(u_img, v_texcoord + canvasPixel * vec2(-1,  0)) * u_kernel[3] +\n      getPixel(u_img, v_texcoord + canvasPixel * vec2( 0,  0)) * u_kernel[4] +\n      getPixel(u_img, v_texcoord + canvasPixel * vec2( 1,  0)) * u_kernel[5] +\n      getPixel(u_img, v_texcoord + canvasPixel * vec2(-1,  1)) * u_kernel[6] +\n      getPixel(u_img, v_texcoord + canvasPixel * vec2( 0,  1)) * u_kernel[7] +\n      getPixel(u_img, v_texcoord + canvasPixel * vec2( 1,  1)) * u_kernel[8] ;\n\n    gl_FragColor = vec4((convolution / u_kernelWeight).rgb, 1);\n  } else {\n    gl_FragColor = vec4(texture2D(u_img, v_texcoord));\n  }\n}\n"}));var e=function(){return p(T.current,o)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),a instanceof b.Canvas&&a.destroy()}}),[]),Object(f.jsxs)(j.a,{container:!0,justifyContent:"center",alignItems:"center",spacing:2,children:[Object(f.jsxs)(j.a,{item:!0,children:[Object(f.jsx)("div",{style:{width:"100%",height:"100%"},children:Object(f.jsx)("canvas",{ref:T})}),Object(f.jsx)(d.a,{color:"secondary",value:z.u_slider,valueLabelDisplay:"auto",step:5,min:0,max:(null===(e=T.current)||void 0===e?void 0:e.width)||0,onChange:function(e,n){return n>=0&&H(Object(s.a)(Object(s.a)({},z),{},{u_slider:n}))}})]}),Object(f.jsx)(j.a,{item:!0,xs:10,sm:10,md:10,lg:6,xl:4}),Object(f.jsxs)(j.a,{container:!0,justifyContent:"center",alignItems:"center",spacing:2,children:[Object(f.jsx)(j.a,{item:!0,xs:8,children:Object(f.jsxs)(m.a,{variant:"outlined",style:{width:"100%"},children:[Object(f.jsx)(_.a,{id:"demo-simple-select-outlined-label",children:"Pilih gambar"}),Object(f.jsx)(v.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:o,onChange:function(e){return O(e.target.value)},label:"Pilih gambar",children:k.map((function(e,n){return Object(f.jsxs)(x.a,{value:e.url,children:[Object(f.jsx)("img",{src:e.url,alt:e.name,height:25})," ",e.name]},n)}))})]})}),Object(f.jsx)(j.a,{item:!0,xs:4,children:Object(f.jsx)(g.a,{control:Object(f.jsx)(h.a,{checked:z.u_doGray,onChange:function(e){return H(Object(s.a)(Object(s.a)({},z),{},{u_doGray:e.target.checked}))},inputProps:{"aria-label":"primary checkbox"}}),label:"Hitam putih"})}),Object(f.jsx)(j.a,{item:!0,xs:12,children:Object(f.jsxs)(m.a,{variant:"outlined",style:{width:"100%"},children:[Object(f.jsx)(_.a,{id:"demo-simple-select-outlined-label",children:"Pilih kernel tersedia"}),Object(f.jsxs)(v.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:C,onChange:function(e){if("custom"===e.target.value)return H(Object(s.a)(Object(s.a)({},z),{},{"u_kernel[0]":S.c_kernel_0,"u_kernel[1]":S.c_kernel_1,"u_kernel[2]":S.c_kernel_2,"u_kernel[3]":S.c_kernel_3,"u_kernel[4]":S.c_kernel_4,"u_kernel[5]":S.c_kernel_5,"u_kernel[6]":S.c_kernel_6,"u_kernel[7]":S.c_kernel_7,"u_kernel[8]":S.c_kernel_8})),void w(e.target.value);var n=B[e.target.value];w(e.target.value),H(Object(s.a)(Object(s.a)({},z),{},{"u_kernel[0]":n[0],"u_kernel[1]":n[1],"u_kernel[2]":n[2],"u_kernel[3]":n[3],"u_kernel[4]":n[4],"u_kernel[5]":n[5],"u_kernel[6]":n[6],"u_kernel[7]":n[7],"u_kernel[8]":n[8]}))},label:"Pilih kernel tersedia",children:[Object(f.jsx)(x.a,{value:"custom",children:"Custom"},"custom"),Object.keys(B).map((function(e,n){return Object(f.jsx)(x.a,{value:e,children:e},n)}))]})]})}),Object(f.jsxs)(j.a,{container:!0,item:!0,justifyContent:"center",alignItems:"center",spacing:1,xs:12,children:[Object(f.jsx)(j.a,{item:!0,xs:12,children:Object(f.jsx)(D.a,{gutterBottom:!0,children:"Kernel Value"})}),Object(f.jsx)(j.a,{item:!0,xs:4,children:Object(f.jsxs)(m.a,{variant:"outlined",style:{width:"100%"},children:[Object(f.jsx)(_.a,{htmlFor:"kernel-0",children:"Index 0"}),Object(f.jsx)(F.a,{id:"kernel-0",type:"text",onChange:function(e){W(),Number.isNaN(+e.target.value)||H(Object(s.a)(Object(s.a)({},z),{},{"u_kernel[0]":e.target.value}))}})]})}),Object(f.jsx)(j.a,{item:!0,xs:4,children:Object(f.jsxs)(m.a,{variant:"outlined",style:{width:"100%"},children:[Object(f.jsx)(_.a,{htmlFor:"kernel-1",children:"Index 1"}),Object(f.jsx)(F.a,{id:"kernel-1",type:"text",onChange:function(e){W(),Number.isNaN(+e.target.value)||H(Object(s.a)(Object(s.a)({},z),{},{"u_kernel[1]":e.target.value}))}})]})}),Object(f.jsx)(j.a,{item:!0,xs:4,children:Object(f.jsxs)(m.a,{variant:"outlined",style:{width:"100%"},children:[Object(f.jsx)(_.a,{htmlFor:"kernel-2",children:"Index 2"}),Object(f.jsx)(F.a,{id:"kernel-2",type:"text",onChange:function(e){W(),Number.isNaN(+e.target.value)||H(Object(s.a)(Object(s.a)({},z),{},{"u_kernel[2]":e.target.value}))}})]})}),Object(f.jsx)(j.a,{item:!0,xs:4,children:Object(f.jsxs)(m.a,{variant:"outlined",style:{width:"100%"},children:[Object(f.jsx)(_.a,{htmlFor:"kernel-3",children:"Index 3"}),Object(f.jsx)(F.a,{id:"kernel-3",type:"text",onChange:function(e){W(),Number.isNaN(+e.target.value)||H(Object(s.a)(Object(s.a)({},z),{},{"u_kernel[3]":e.target.value}))}})]})}),Object(f.jsx)(j.a,{item:!0,xs:4,children:Object(f.jsxs)(m.a,{variant:"outlined",style:{width:"100%"},children:[Object(f.jsx)(_.a,{htmlFor:"kernel-4",children:"Index 4"}),Object(f.jsx)(F.a,{id:"kernel-4",type:"text",onChange:function(e){W(),Number.isNaN(+e.target.value)||H(Object(s.a)(Object(s.a)({},z),{},{"u_kernel[4]":e.target.value}))}})]})}),Object(f.jsx)(j.a,{item:!0,xs:4,children:Object(f.jsxs)(m.a,{variant:"outlined",style:{width:"100%"},children:[Object(f.jsx)(_.a,{htmlFor:"kernel-5",children:"Index 5"}),Object(f.jsx)(F.a,{id:"kernel-5",type:"text",onChange:function(e){W(),Number.isNaN(+e.target.value)||H(Object(s.a)(Object(s.a)({},z),{},{"u_kernel[5]":e.target.value}))}})]})}),Object(f.jsx)(j.a,{item:!0,xs:4,children:Object(f.jsxs)(m.a,{variant:"outlined",style:{width:"100%"},children:[Object(f.jsx)(_.a,{htmlFor:"kernel-6",children:"Index 6"}),Object(f.jsx)(F.a,{id:"kernel-6",type:"text",onChange:function(e){W(),Number.isNaN(+e.target.value)||H(Object(s.a)(Object(s.a)({},z),{},{"u_kernel[6]":e.target.value}))}})]})}),Object(f.jsx)(j.a,{item:!0,xs:4,children:Object(f.jsxs)(m.a,{variant:"outlined",style:{width:"100%"},children:[Object(f.jsx)(_.a,{htmlFor:"kernel-7",children:"Index 7"}),Object(f.jsx)(F.a,{id:"kernel-7",type:"text",onChange:function(e){W(),Number.isNaN(+e.target.value)||H(Object(s.a)(Object(s.a)({},z),{},{"u_kernel[7]":e.target.value}))}})]})}),Object(f.jsx)(j.a,{item:!0,xs:4,children:Object(f.jsxs)(m.a,{variant:"outlined",style:{width:"100%"},children:[Object(f.jsx)(_.a,{htmlFor:"kernel-8",children:"Index 8"}),Object(f.jsx)(F.a,{id:"kernel-8",type:"text",onChange:function(e){W(),Number.isNaN(+e.target.value)||H(Object(s.a)(Object(s.a)({},z),{},{"u_kernel[8]":e.target.value}))}})]})})]})]})]})};var G=function(){return Object(f.jsxs)(c.a,{children:[Object(f.jsxs)("nav",{children:[Object(f.jsx)(c.b,{to:"simple-operations",children:"Simple Operations"})," ",Object(f.jsx)(c.b,{to:"kernel-convolution",children:"Kernel Convolution"})," ",Object(f.jsx)(c.b,{to:"edge-detection-sobel",children:"Edge Detection (Sobel)"})," ",Object(f.jsx)(c.b,{to:"edge-detection-prewitt",children:"Edge Detection (Prewitt)"})," ",Object(f.jsx)(c.b,{to:"hough-transformation",children:"Hough Transformation"})]}),Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{path:"/",element:Object(f.jsx)("p",{children:"Welcome"})}),Object(f.jsx)(o.a,{path:"simple-operations",element:Object(f.jsx)(S,{})}),Object(f.jsx)(o.a,{path:"kernel-convolution",element:Object(f.jsx)(L,{})}),Object(f.jsx)(o.a,{path:"edge-detection-sobel",element:Object(f.jsx)(C,{mask:2})}),Object(f.jsx)(o.a,{path:"edge-detection-prewitt",element:Object(f.jsx)(C,{mask:1})}),Object(f.jsx)(o.a,{path:"hough-transformation",element:Object(f.jsx)(w,{})})]})]})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,146)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,i=n.getLCP,l=n.getTTFB;t(e),r(e),a(e),i(e),l(e)}))};l.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(G,{})}),document.getElementById("root")),E()}},[[100,1,2]]]);
//# sourceMappingURL=main.12fa6ea9.chunk.js.map