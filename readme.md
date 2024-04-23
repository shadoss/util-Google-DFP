# Responsive Ad Breakpoint Handler

This JavaScript code is designed to manage Google Ad Manager ad refreshes and adjustments based on viewport breakpoints. It listens for changes in the viewport size and triggers appropriate actions to ensure ads are displayed correctly across different screen sizes.

## Features

- Automatically refreshes Google Ad Manager ad units when viewport breakpoints are crossed.
- Supports custom breakpoints for fine-tuning responsiveness.
- Handles both initial page load and window resizing events.

## How to Use

1. **Include the Script**: Add this JavaScript code to your website's HTML file or include it in your JavaScript bundle.

2. **Configure Google Tag Manager**: Ensure that Google Tag Manager (GTM) is properly configured and loaded on your webpage. This script relies on GTM for managing and displaying ads.

3. **Customize Breakpoints (Optional)**: Modify the `breakpoints` array to match your website's responsive design breakpoints. These values represent the widths (in pixels) at which different layout changes occur.

4. **Deploy**: Once the script is included and configured, it will automatically handle ad refreshes and adjustments based on the defined breakpoints.

## How It Works

- The script initializes and listens for both the `DOMContentLoaded` and `resize` events.
- On page load (`DOMContentLoaded`), it checks the initial viewport size against the defined breakpoints and triggers ad refreshes if necessary.
- When the window is resized, the script waits briefly for resizing to settle before re-evaluating the viewport size and triggering ad refreshes if breakpoints are crossed.

## Customization

- **Breakpoints**: Adjust the `breakpoints` array to match your website's specific layout breakpoints. These values determine when ad units should be refreshed based on changes in viewport size.

- **Additional Logic**: Customize the `getBreakPoint` function if you need to incorporate additional logic or actions based on specific conditions or events.

## Dependencies

- This script relies on Google Tag Manager (GTM) for ad management and display. Ensure that GTM is properly configured and loaded on your webpage for the script to function correctly.

## License

This code is provided under an open-source license. See the LICENSE file for details.
