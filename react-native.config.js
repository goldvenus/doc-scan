module.exports = {
    assets: [
        './assets/fonts/'
    ],
    dependencies: {
        'react-native-document-scanner': {
            platforms: {
                android: null, // disable Android platform, other platforms will still autolink if provided
            },
        },
    },
};
