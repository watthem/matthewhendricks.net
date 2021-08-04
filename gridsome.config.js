// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Matthew Hendricks",
  siteUrl: "matthewhendricks.net",
  siteDescription: "Portfolio and writings",
  templates: {
    Post: "/blog/:title",
    Project: "/project/:title",
    Tag: "/tag/:title",
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/posts/**/*.md",
        typeName: "Post",
        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "cv/docs/*.md",
        typeName: "Document",
        refs: {
          tags: {
            typeName: "Tag",
            create: false,
          },
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "cv/projects/**/*.md",
        typeName: "Project",
        refs: {
          tags: {
            typeName: "Tag",
            create: false,
          },
        },
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",
    },
  ],
};
