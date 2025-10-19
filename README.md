# Profile Card Component

A fully responsive, accessible profile card built with vanilla HTML, CSS, and JavaScript.

##  Features

-  Real-time timestamp (updates every second)
-  Fully responsive (mobile, tablet, desktop)
-  WCAG 2.1 accessible with keyboard navigation
-  Customizable icons and colors
-  Test-ready with data-testid attributes

## Quick Start

1. **Setup Files**
   
   your-project/
   ├── index.html
   ├── styles.css
   ├── script.js
   └── images
   README.md
   

2. **Configure Icons** (in `index.html`)
   javascript
   const socialIcons = {
       twitter: './images/twitter.png',
       github: './images/github.png',
       linkedin: './images/linkedin.png'
   };
   ```

3. **Customize Content**
   - Update name, bio, and avatar in `index.html`
   - Modify social links, hobbies, and dislikes
   - Change colors in `styles.css`

4. **Open `index.html`** in your browser

##  Responsive Breakpoints

- **Mobile** (< 768px): Stacked vertical layout
- **Tablet** (768px - 1023px): Side-by-side layout, 2-column grid
- **Desktop** (≥ 1024px): Spacious layout with larger avatar

 Testing

All elements include `data-testid` attributes:
- `test-profile-card` - Main container
- `test-user-name` - Name
- `test-user-bio` - Biography
- `test-user-time` - Timestamp
- `test-user-avatar` - Profile image
- `test-user-social-links` - Social links container
- `test-user-hobbies` - Hobbies list
- `test-user-dislikes` - Dislikes list

##  Icon Resources

- [Font Awesome](https://fontawesome.com/)
- [Flaticon](https://flaticon.com/)

##  License
