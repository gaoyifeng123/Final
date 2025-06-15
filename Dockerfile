
# 基础镜像
FROM nginx:alpine

# 复制网站文件
COPY personal-site /usr/share/nginx/html

# 暴露端口
EXPOSE 80