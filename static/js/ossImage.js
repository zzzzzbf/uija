// 公共图片配置对象
const commonImageConfig = {
  baseUrl: 'https://uija.oss-cn-nanjing.aliyuncs.com',
  sizes: {
    small: '100w',
    medium: '200w',
    large: '300w'
  },
  formats: {
    webp: true,
    jpg: true,
	png: true
  }
};

// 获取阿里云OSS图片url的函数
function getOSSImageUrl(imageName, format) {
  const baseUrl = commonImageConfig.baseUrl;
  const formats = commonImageConfig.formats;
  
  let url = baseUrl + imageName;
  if (formats[format]) {
    url += '.' + format;
  }
  
  return url;
}
 
// 获取图片url的函数
function getImageUrl(imageName, size, format) {
  const baseUrl = commonImageConfig.baseUrl;
  const sizes = commonImageConfig.sizes;
  const formats = commonImageConfig.formats;
  
  let url = baseUrl + imageName;
  if (sizes[size]) {
    url += '.' + sizes[size];
  }
  if (formats[format]) {
    url += '.' + format;
  }
  
  return url;
}