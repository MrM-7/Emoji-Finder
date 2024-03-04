# Emoji Finder App

## Description

Emoji Finder is a web application that allows users to search for emojis and discover their Unicode representation.

## Demo

Explore the [Emoji Finder](https://emo-finder.netlify.app/).

## Features

- Emoji search functionality
- Display of Unicode representation

## Technologies Used

- React
- Tailwind CSS
- Fetch API

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MrM-7/Emoji-Finder.git
   ```

2. **Install dependencies:**

   ```bash
   cd Emoji-Finder
   npm install
   ```

3. **Set up environment variables:**

   - Create a `.env` file in the root directory.
   - Add the following variables:

     ```env
     VITE_EMOJI_URL=https://emoji-api.com/emojis?access_key=
     VITE_EMOJI_KEY=your_access_key
     ```

4. **Run the app:**

   ```bash
   npm run dev
   ```
