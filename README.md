# To-Do List Application - Keeper

A modern, feature-rich to-do list application built with React that allows users to create multiple organized lists with customizable items. Originally created with CodeSandbox and enhanced for better functionality.

## ✨ Features

- **Multiple List Management**: Create and manage multiple independent to-do lists
- **Rich Item Content**: Add items with both titles and detailed content/descriptions
- **Interactive Checkboxes**: Mark items as completed with visual feedback
- **In-line Editing**: Edit items directly without navigating to separate pages
- **Drag-and-Drop Ready**: Modern UI designed for future enhancements
- **Responsive Design**: Clean, modern interface that works across devices
- **Real-time Updates**: Instant state management with React hooks

## 🚀 Technology Stack

- **Frontend**: React 18.3.1
- **UI Components**: Material-UI Icons (@mui/icons-material)
- **Styling**: Custom CSS with modern design patterns
- **State Management**: React Hooks (useState, useEffect)
- **Build Tool**: Create React App (react-scripts)

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/luckyeggegg/To-do-list_Updated.git
   cd To-do-list_Updated
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   # For Node.js 17+ (due to OpenSSL changes)
   export NODE_OPTIONS="--openssl-legacy-provider"
   npm start
   ```
   
   The application will open in your browser at `http://localhost:3000`

## 🎯 Usage

### Creating Lists
1. Enter a list title in the input field at the top
2. Click the "+" button to create a new list

### Managing Items
1. **Add Items**: Click "ADD NEW ITEM" button within any list
2. **Fill Details**: Enter item title and optional content/description
3. **Save**: Click submit to add the item to your list

### Item Actions
- **Complete**: Check the checkbox to mark items as done
- **Edit**: Click the edit icon (pencil) to modify item details
- **Delete**: Click the trash icon to remove items
- **List Deletion**: Use the trash icon in the list header to remove entire lists

## 📁 Project Structure

```
src/
├── components/
│   ├── App.jsx           # Main application component
│   ├── Header.jsx        # Application header with "Keeper" branding
│   ├── Footer.jsx        # Application footer
│   ├── CreateList.jsx    # Component for creating new lists
│   ├── NoteList.jsx      # Individual list container with items
│   ├── Item.jsx          # Individual to-do item component
│   ├── CreateItem.jsx    # Form for adding new items
│   └── EditItem.jsx      # Form for editing existing items
├── index.js              # Application entry point
public/
├── index.html           # HTML template
├── styles.css           # Global styles and theming
└── ...
```

## 🎨 Key Components

### App Component
- Manages global state for all lists
- Handles list creation and deletion
- Renders the main application layout

### NoteList Component
- Manages individual list state and items
- Handles item operations (add, edit, delete)
- Controls item creation form visibility

### Item Component
- Displays individual to-do items
- Manages completion status and editing state
- Provides delete and edit functionality

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (⚠️ irreversible)

## 🌟 Future Enhancements

- Data persistence (localStorage/database)
- User authentication and profiles
- List sharing and collaboration
- Due dates and reminders
- Categories and tags
- Drag and drop reordering
- Export functionality
- Mobile app version

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Live Demo

Visit the application: [To-Do List Keeper](https://your-demo-url-here.com)

---

Built with ❤️ using React and Material-UI
