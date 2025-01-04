# BlueSwap - Web3 Swap DApp UI Template

![BlueSwap Logo](https://blueswap.alamitechnology.com/logo.png)

BlueSwap is a modern and responsive UI template for a Web3 Swap Decentralized Application (DApp) built using **React**. This template is designed to provide a seamless user experience for swapping tokens, bridging assets, and staking in the decentralized finance (DeFi) ecosystem.

Check out the live demo: [BlueSwap Live Demo](https://blueswap.alamitechnology.com/)

---

## Features

- **Swap Tokens**: Easily swap between different tokens with a user-friendly interface.
- **Bridge Assets**: Seamlessly bridge assets across different blockchain networks.
- **Staking**: Stake your tokens and earn rewards directly from the platform.
- **Dark/Light Mode**: Toggle between dark and light themes for a personalized experience.
- **Responsive Design**: Fully responsive design that works on all devices (desktop, tablet, mobile).
- **Web3 Integration**: Ready to integrate with Web3 libraries like Ethers.js or Web3.js.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Framer Motion**: For smooth animations and transitions.
- **React Icons**: A collection of popular icons for React applications.
- **Web3.js/Ethers.js**: For interacting with Ethereum-based blockchains (to be integrated).

---

## Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- **Node.js**: Make sure you have Node.js installed. Download it [here](https://nodejs.org/).
- **Git**: Ensure you have Git installed. Download it [here](https://git-scm.com/).

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/Roy-rakun/blueswap.git
```

2. **Navigate to the project directory**:

```bash
cd blueswap
```

3. **Install dependencies**:

```bash
npm install
```

4. **or if you're using Yarn**:

```bash
yarn install
```

5. **Run the development server**:

```bash
npm start
```
or

```bash
yarn start
```

6. **Open your browser**:
Visit http://localhost:3000 to view the application.

---

### Deployment
To deploy this project to a live server, follow these steps:

1. **Build the project**:

```bash
npm run build
```
or

```bash
yarn build
```

2. **Deploy to GitHub Pages (optional)**:

Install gh-pages:

```bash
npm install gh-pages --save-dev
```

Add the following scripts to your package.json:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. **Deploy**:

```bash
npm run deploy
```

4. **Deploy to CPanel**:

Upload the contents of the build folder to your hosting provider's public_html directory.

### Folder Structure
```
blueswap/
├── public/              # Static files
├── src/                 # Source code
│   ├── components/      # React components
│   ├── pages/           # Page components
│   ├── App.jsx          # Main application component
│   └── index.js         # Entry point
├── tailwind.config.js   # Tailwind CSS configuration
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

**Contributing**
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

**Fork the repository**.

1. Create a new branch (``git checkout -b feature/AmazingFeature``).

2. Commit your changes (``git commit -m 'Add some AmazingFeature'``).

3. Push to the branch (``git push origin feature/AmazingFeature``).

4. Open a Pull Request.

### License
This project is licensed under the MIT License. See the [LICENSE](https://choosealicense.com/licenses/agpl-3.0/) file for details.

### Acknowledgments
1. React Community: For the amazing library and ecosystem.
2. Tailwind CSS: For making styling so much easier.
3. Framer Motion: For the smooth animations.
4. You: For checking out this project! 😎

### Contact
If you have any questions or feedback, feel free to reach out:

GitHub: [Roy-rakun](https://github.com/Roy-rakun).

Email: roytrigunawan@gmail.com 

Made with ❤️ by Roy Rakun | [Live Demo](https://blueswap.alamitechnology.com/).