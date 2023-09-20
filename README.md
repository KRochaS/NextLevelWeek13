<p align="center">
  <img src="https://github.com/KRochaS/NextLevelWeek13/blob/master/.github/logo.svg" width="350" >
  <br/>
  <br/>
  <img src="https://github.com/KRochaS/NextLevelWeek13/blob/master/.github/upload.ai.svg" width="180" >
</p>

<br/>

<p align="center">	
   <img src="https://img.shields.io/badge/-ReactJS-844FE5?style=flat&logoColor=white" />

  <img src="https://img.shields.io/badge/-TailwindCSS-844FE5?style=flat&logoColor=white" />
  
   <img src="https://img.shields.io/badge/-NodeJS-844FE5?style=flat&logoColor=white" />
   
   <img src="https://img.shields.io/badge/-OpenAI-844FE5?style=flat&logoColor=white" />
</p>



## :bar_chart: About
An application that enables users to upload videos and, through AI, automatically generate attention-grabbing titles and well-indexed descriptions.



## :computer:  WEB

For the front-end development of the application, features of ReactJS were leveraged, such as componentization, properties, and common hooks like useEffect, useMemo, and useState. Additionally, Shadcn UI library components were integrated. Video-to-audio conversion was achieved using the FFmpeg library. For styling, Tailwind CSS was employed, offering the benefit of rapid and consistent UI development.
Furthermore, the backend API was seamlessly accessed using Axios, enhancing the application's functionality.

##### Technologies and libs:                                                                
- [ReactJS](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [ShadcnUI](https://ui.shadcn.com/)
- [Vercel AI SDK](https://vercel.com/blog/introducing-the-vercel-ai-sdk)
- [Vite](https://vitejs.dev/)


#####  Features
  
  - [x] Select a video and display a video preview.
  - [x] Video transcription prompt.
  - [x] Video-to-audio conversion.
  - [x] Status update during video-to-audio conversion and <br />
        audio-to-transcription process.
  - [x] Customize AI response creativity.
  - [x] Automatic generation of detailed AI prompts.
  - [x] Display AI-generated responses on the screen.

<p align="center">
   <img src="https://github.com/KRochaS/NextLevelWeek13/blob/master/.github/screenshot-01.png" width="986" >
   <img src="https://github.com/KRochaS/NextLevelWeek13/blob/master/.github/upload.ai.gif" width="986" >
</p>

#### how to run the project: 
```bash
#  Clone this repository.
$ git clone https://github.com/KRochaS/NextLevelWeek13

# Navigate to the project folder in the terminal/cmd.
$ cd web/

# Install the dependencies.
$ npm i ou yarn install

# Run the project
$ npm run dev

# http://localhost:5173/
```


## :woman_technologist: Server

##### Technologies and libs:                                                                
- [NodeJS](https://nodejs.org/en)
- [Typescript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.dev/)
- [Axios](https://axios-http.com/)
- [Prisma](https://www.prisma.io/)
- [SQLite](https://sqlite.org/)
- [Zod](https://zod.dev/)
- [OpenAI API](https://openai.com/blog/openai-api)
- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

For the back-end development of the application with NodeJS were created the routes using some of Node's built-in features in conjunction with the Fastify framework. For database integration, Prisma and Sqlite was utilized. Additionally, OpenAI and streaming resources were used to generate responses through transcription.

#####  Features
  
  - [x] Creation of a GET route to fetch pre-registered prompts.
  - [x] Creation of a POST route for video uploads.
  - [x] Creation of a POST route to obtain audio transcription <br/>
        by sending the prompt as the request body.
  - [x] Creation of a POST route that returns the AI-generated response.

<p align="center">
   <img src="https://github.com/KRochaS/NextLevelWeek13/blob/master/.github/screenshot-02.png" width="986" >
    <img src="https://github.com/KRochaS/NextLevelWeek13/blob/master/.github/screenshot-03.PNG" width="986" >
</p>

#### how to run the project: 

```bash

#  Clone this repository.
$ git clone https://github.com/KRochaS/NextLevelWeek13

# Configure Database in .env file
# DATABASE_URL="file:./dev.db"

# Configure OPENAI KEY in .env file
# OPENAI_KEY="KEY"
# To obtain an OpenAI API key, you need to create an account on the website and 
# generate a key by providing your email and phone number for verification.

# Navigate to the project folder in the terminal/cmd.
$ cd server/

# Install the dependencies.
$ npm i ou yarn install

# Run the project
$ npm run dev

# HTTP server running on http://localhost:3333
```
