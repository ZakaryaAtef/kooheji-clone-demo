# Future Migration to .NET Core

Because you plan to add a .NET Core backend in the future to manage the website and dynamic data (like listed projects), the refactoring done today acts as a major stepping stone.

## 1. Easy Layout Migrations
Instead of copy-pasting headers and footers across 91 files, we have isolated the `components/header.html` and `components/footer.html`. When you upgrade to .NET Core MVC or Razor Pages:
1. These HTML components directly translate into `_Layout.cshtml` or Razor Partial Views (e.g. `<partial name="_Header" />`).
2. The current JavaScript injection method won't be needed; .NET Core's server-side rendering will inject them natively, making the site SEO-friendly from the start.

## 2. Dynamic Content (Listed Projects)
Currently, projects are hardcoded in static files like `projects/completed-projects/ikea.html` and also listed manually in the header.
In .NET Core:
1. Create a `Project` model backed by Entity Framework Core (SQL Database).
2. Create a generic `ProjectDetails.cshtml` view that accepts a `Project` model and renders its data instead of having 30+ separate HTML files for each project.
3. Your database can power the navigation dropdowns so new projects automatically appear in the `"Our Expertise"` or `"Projects"` menu.

## 3. IIS & Web.Config
Your current `web.config` ensures clean extensionless URLs (e.g., `/about-us` instead of `/about-us.html`). When migrating to .NET Core:
1. ASP.NET Core natively uses attribute routing (`[Route("about-us")]`) or convention-based routing mapped easily in `Program.cs`. 
2. You can remove the static URL Rewrite `web.config` rules since .NET handles routing automatically via the ASP.NET Core Module for IIS.

## Next Steps
- When you are ready, run `dotnet new mvc -n KoohejiContractors` to scaffold a new MVC app.
- Copy your `assets/` folder to `wwwroot/assets`.
- Move `components/header.html` content into `Views/Shared/_Layout.cshtml`.
- Slowly move each unique page content into its corresponding `.cshtml` view.
