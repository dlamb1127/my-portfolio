FROM node:22-alpine
WORKDIR /app
COPY package.json server.js ./
COPY public ./public
RUN node -e 'const fs=require("fs");fs.writeFileSync("public/resume.pdf",Buffer.from(fs.readFileSync("public/resume.pdf.base64","utf8"),"base64"));fs.unlinkSync("public/resume.pdf.base64");'
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "server.js"]
