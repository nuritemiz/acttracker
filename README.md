# ActTracker

A modern activity tracking mobile application built with React Native and Expo.

## Features

- **Activity Tracking**: Track various activities including running, cycling, tennis, swimming, yoga, hiking, and weight training
- **Statistics Dashboard**: View your weekly activity statistics with beautiful visualizations
- **Calorie Tracking**: Monitor calories burned for each activity
- **Custom UI**: Modern dark theme with lime green accents (#BFF205)
- **Responsive Design**: Optimized for mobile devices

## Tech Stack

- **React Native** 0.81.5
- **Expo** ~54.0.30
- **React Navigation** 7.x
- **NativeWind** (Tailwind CSS for React Native)
- **Expo Linear Gradient**
- **React Native Reanimated**
- **Custom Fonts**: General Sans family

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nuritemiz/acttracker.git
cd acttracker
```

2. Install dependencies:
```bash
npm install
```

3. Generate native folders:
```bash
npx expo prebuild
```

4. Run the app:

For Android:
```bash
npx expo run:android
```

For iOS:
```bash
npx expo run:ios
```

## Project Structure

```
acttracker/
├── screens/           # Screen components
│   ├── Home.js       # Main activity selection screen
│   └── ActivityDetails.js  # Activity statistics screen
├── assets/           # Images, fonts, and other assets
│   ├── fonts/       # Custom font files
│   └── *.png        # Activity images
├── App.js           # Main app component with navigation
├── app.json         # Expo configuration
└── package.json     # Dependencies
```

## Design

The app features a modern dark theme with:
- Background: `#0D0D0D`
- Accent Color: `#BFF205` (Lime Green)
- Card Backgrounds: `#1E1E1E`, `#161616`
- Custom typography using General Sans font family

## Screenshots

*Coming soon*

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Nuri Temiz**
- GitHub: [@nuritemiz](https://github.com/nuritemiz)

## Acknowledgments

- Built with [Expo](https://expo.dev/)
- Icons from [@expo/vector-icons](https://icons.expo.fyi/)
- UI inspired by modern fitness tracking apps
