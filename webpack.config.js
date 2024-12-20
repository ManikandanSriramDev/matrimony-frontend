export const module = {
    rules: [
        {
            test: /\.html$/, // Match all HTML files
            use: ['html-loader'], // Use html-loader to process them
        },
    ],
};
  