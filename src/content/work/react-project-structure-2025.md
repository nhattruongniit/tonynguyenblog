---
layout: ../../layouts/BlogLayout.astro
title: 'React Project Structure 2025'
publishDate: 2025-01-02
description: 'Before web discuss this article. I would like to mention a few things. All of these structure folder will inside “src” folder. Besides, you should be know react basics.'
author: 'Tony Nguyen'
img: '/assets/blog/logo-react-structure-2025.jpeg'
img_alt: 'React Project Structure 2025'
tags: ["react"]
---

### What is React?
It is a Javascript library created by Facebook. It is used to build user interface, and an tool for building UI components.
Almost all the time, we use the create-react-app to create an application react. In this article, we will build an our boilerplate for an application react with the vite.

### How to Structure React application?
We have read many articles that every article explains the boilerplate, and we can get confused about which one is best approach.

There structure will go in order from the simplest to the most complex, but don’t just jump to the most  advanced/complex structure because depending on your project size. So you can use some parts or all of them for your project.

### Folder structure
<div class="flex justify-center">
  <img src="/assets/blog/react-structure-2025/folder-structure.webp" alt="Folder structure react" width="300">
</div>

### What is the Folder Structure React?

It looks like this.

<ul class="blog-disc">
  <li>styles folder</li>
  <li>assets folder</li>
  <li>components folder</li>
  <li>configs folder</li>
  <li>context folder</li>
  <li>layouts folder</li>
  <li>helpers folder</li>
  <li>hooks folder</li>
  <li>services folder</li>
  <li>types folder</li>
  <li>states folder</li>
  <li>pages folder</li>
</ul> 

#### styles
The **styles** folder contains style css of the project. Here we can store component-based custom styles.
<div class="flex justify-center">
  <img src="/assets/blog/react-structure-2025/styles-folder.webp" alt="styles folder react structure 2025" width="320">
</div>

#### assets
The **assets** folder contains all images, css files, font files, etc… for your project.
<div class="flex justify-center">
  <img src="/assets/blog/react-structure-2025/assets-folder.webp" alt="assets folder react structure 2025" width="300">
</div>

#### contexts
The **contexts** folder stores all your React context files that used to share states between components each other. There are large projects you will have multiple context you use across your application. If you are using a different state manage such as Redux, you can replace this folder for share states.
<div class="flex justify-center">
  <img src="/assets/blog/react-structure-2025/contexts-folder.webp" alt="contexts folder react structure 2025" width="300">
</div>

#### configs
The **configs** folder contains config files where we store environment variables. We will use this folder to setup configurations in your application. Besides you can use it to stores constant variables, then we just change a place, and they will apply for all placed that used.
<div class="flex justify-center">
  <img src="/assets/blog/react-structure-2025/configs-folder.webp" alt="configs folder react structure 2025" width="300">
</div>

#### layouts
The **layouts** folder contains dynamic layout that you want display based on your client’s information. This would be things like a sidebar, navbar, etc… If your application only has a layout then you can just place it in the components folder, but if you have multiple different layouts used across your application this is a great place to store them.
<div class="flex justify-center">
  <img src="/assets/blog/react-structure-2025/layouts-folder.webp" alt="layouts folder react structure 2025" width="300">
</div>

#### helpers
The **helpers** folder contains utilities functions. You should be store pure functions on this folder. This mean is each function will have its own responsibilities.
<div class="flex justify-center">
  <img src="/assets/blog/react-structure-2025/helpers-folder.webp" alt="helpers folder react structure 2025" width="300">
</div>

### hooks
The **hooks** folder contains the hooks function to can reuse code logic for all components, and it uses to separate between code logic and your components. So your component just simple show render UI.
<div class="flex justify-center">
  <img src="/assets/blog/react-structure-2025/hooks-folder.webp" alt="hooks folder react structure 2025" width="300">
</div>

#### services
The **services** folder contains all your code for interface with any external API. On large projects you will have many different APIs you need to access and this folder is the place to put the code that interact with those APIs.
<div class="flex justify-center">
  <img src="/assets/blog/react-structure-2025/servies-folder.webp" alt="servies folder react structure 2025" width="300">
</div>

#### types
If your applications created by react typescript. You can use this folder to contains interfaces, types that you use to define on components. This folder easy uses to share interfaces across components.
<div class="flex justify-center">
  <img src="/assets/blog/react-structure-2025/types-folder.webp" alt="types folder react structure 2025" width="300">
</div>

### states
The **states** folder will be added if you use redux in your project. There are 2 folders named actions, reducers to manage states. They will be called in almost all the pages, so create actions, reduces according to pages name.
<div class="flex justify-center">
  <img src="/assets/blog/react-structure-2025/states-folder.webp" alt="states folder react structure 2025" width="300">
</div>

#### components
This folder is very important in your project. Components are the building blocks of any react project. This folder contains collections UI components like button, card, modal, input, etc…, that can be used across various files in the project.
<div class="flex justify-center">
  <img src="/assets/blog/react-structure-2025/components-folder.webp" alt="components folder react structure 2025" width="300">
</div>

#### pages
The final folder that the pages folder indicate the route of the react application. Each file in this folder contains its route. A page can contain its sub folder. And every sub folder represent its own route. This folder is confused  for yourself when you identify which components are in the pages folder, or in the feature folder. So, I propose we can reference ways the NextJS framework using app router to separate components.
<div class="flex justify-center">
  <img src="/assets/blog/react-structure-2025/route-folder.webp" alt="route folder react structure 2025" width="620">
</div>

We will create index file which used to export or import named components. We won’t write code login into the index file. That will help us find component name more easily.
<div class="flex justify-center">
  <img src="/assets/blog/react-structure-2025/route-folder-2.webp" alt="route folder react structure 2025" width="520">
</div>

### Conclusion
This is one of the most used architecture. As I have already mentioned, no one best architecture will suit evert project. So we ourselves will decide parts into our project and always remember to maintain a folder structure so every project is simple and easily understood by any developer.