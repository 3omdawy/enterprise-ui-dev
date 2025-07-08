// ../../vitest.config.ts
import path2 from "node:path";
import { defineConfig, defaultExclude } from "file:///C:/Users/Yoga/projects/DevOps/enterprise-ui-dev/node_modules/vitest/dist/config.js";

// ../../vite.config.ts
import path from "node:path";
import react from "file:///C:/Users/Yoga/projects/DevOps/enterprise-ui-dev/node_modules/@vitejs/plugin-react/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\Yoga\\projects\\DevOps\\enterprise-ui-dev";
var configuration = {
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      $lib: path.resolve(__vite_injected_original_dirname, "./src/lib"),
      $components: path.resolve(__vite_injected_original_dirname, "./src/components")
    }
  }
};
var vite_config_default = configuration;

// ../../vitest.config.ts
var __vite_injected_original_dirname2 = "C:\\Users\\Yoga\\projects\\DevOps\\enterprise-ui-dev";
var _a, _b;
var vitest_config_default = defineConfig({
  ...vite_config_default,
  resolve: {
    alias: {
      ...(_b = (_a = vite_config_default) == null ? void 0 : _a.resolve) == null ? void 0 : _b.alias,
      test: path2.resolve(__vite_injected_original_dirname2, "./test")
    }
  },
  test: {
    globals: true,
    setupFiles: path2.resolve(__vite_injected_original_dirname2, "test/setup.ts"),
    exclude: [...defaultExclude, "**/*.svelte**"],
    environmentMatchGlobs: [
      ["**/*.test.tsx", "jsdom"],
      ["**/*.component.test.ts", "jsdom"]
    ],
    coverage: {
      statements: 54.92,
      thresholdAutoUpdate: true,
      include: ["src/**/*"],
      exclude: [
        "test/**",
        "vite.*.ts",
        "**/*.d.ts",
        "**/*.test.*",
        "**/*.config.*",
        "**/snapshot-tests/**",
        "**/*.solution.tsx",
        "**/coverage/**"
      ],
      all: true
    }
  }
});
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vdml0ZXN0LmNvbmZpZy50cyIsICIuLi8uLi92aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFlvZ2FcXFxccHJvamVjdHNcXFxcRGV2T3BzXFxcXGVudGVycHJpc2UtdWktZGV2XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxZb2dhXFxcXHByb2plY3RzXFxcXERldk9wc1xcXFxlbnRlcnByaXNlLXVpLWRldlxcXFx2aXRlc3QuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9Zb2dhL3Byb2plY3RzL0Rldk9wcy9lbnRlcnByaXNlLXVpLWRldi92aXRlc3QuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgZGVmYXVsdEV4Y2x1ZGUgfSBmcm9tICd2aXRlc3QvY29uZmlnJztcbmltcG9ydCBjb25maWd1cmF0aW9uIGZyb20gJy4vdml0ZS5jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAuLi5jb25maWd1cmF0aW9uLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIC4uLmNvbmZpZ3VyYXRpb24/LnJlc29sdmU/LmFsaWFzLFxuICAgICAgdGVzdDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vdGVzdCcpLFxuICAgIH0sXG4gIH0sXG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIHNldHVwRmlsZXM6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICd0ZXN0L3NldHVwLnRzJyksXG4gICAgZXhjbHVkZTogWy4uLmRlZmF1bHRFeGNsdWRlLCAnKiovKi5zdmVsdGUqKiddLFxuICAgIGVudmlyb25tZW50TWF0Y2hHbG9iczogW1xuICAgICAgWycqKi8qLnRlc3QudHN4JywgJ2pzZG9tJ10sXG4gICAgICBbJyoqLyouY29tcG9uZW50LnRlc3QudHMnLCAnanNkb20nXSxcbiAgICBdLFxuICAgIGNvdmVyYWdlOiB7XG4gICAgICBzdGF0ZW1lbnRzOiA1NC45MixcbiAgICAgIHRocmVzaG9sZEF1dG9VcGRhdGU6IHRydWUsXG4gICAgICBpbmNsdWRlOiBbJ3NyYy8qKi8qJ10sXG4gICAgICBleGNsdWRlOiBbXG4gICAgICAgICd0ZXN0LyoqJyxcbiAgICAgICAgJ3ZpdGUuKi50cycsXG4gICAgICAgICcqKi8qLmQudHMnLFxuICAgICAgICAnKiovKi50ZXN0LionLFxuICAgICAgICAnKiovKi5jb25maWcuKicsXG4gICAgICAgICcqKi9zbmFwc2hvdC10ZXN0cy8qKicsXG4gICAgICAgICcqKi8qLnNvbHV0aW9uLnRzeCcsXG4gICAgICAgICcqKi9jb3ZlcmFnZS8qKicsXG4gICAgICBdLFxuICAgICAgYWxsOiB0cnVlLFxuICAgIH0sXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcWW9nYVxcXFxwcm9qZWN0c1xcXFxEZXZPcHNcXFxcZW50ZXJwcmlzZS11aS1kZXZcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFlvZ2FcXFxccHJvamVjdHNcXFxcRGV2T3BzXFxcXGVudGVycHJpc2UtdWktZGV2XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9Zb2dhL3Byb2plY3RzL0Rldk9wcy9lbnRlcnByaXNlLXVpLWRldi92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIFVzZXJDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5jb25zdCBjb25maWd1cmF0aW9uOiBVc2VyQ29uZmlnID0ge1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgICAgICRsaWI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9saWInKSxcbiAgICAgICRjb21wb25lbnRzOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29tcG9uZW50cycpLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmF0aW9uO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErVSxPQUFPQSxXQUFVO0FBQ2hXLFNBQVMsY0FBYyxzQkFBc0I7OztBQ0Q4UixPQUFPLFVBQVU7QUFFNVYsT0FBTyxXQUFXO0FBRmxCLElBQU0sbUNBQW1DO0FBS3pDLElBQU0sZ0JBQTRCO0FBQUEsRUFDaEMsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUNwQyxNQUFNLEtBQUssUUFBUSxrQ0FBVyxXQUFXO0FBQUEsTUFDekMsYUFBYSxLQUFLLFFBQVEsa0NBQVcsa0JBQWtCO0FBQUEsSUFDekQ7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxJQUFPLHNCQUFROzs7QURoQmYsSUFBTUMsb0NBQW1DO0FBQXpDO0FBSUEsSUFBTyx3QkFBUSxhQUFhO0FBQUEsRUFDMUIsR0FBRztBQUFBLEVBQ0gsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsSUFBRyxzREFBZSxZQUFmLG1CQUF3QjtBQUFBLE1BQzNCLE1BQU1DLE1BQUssUUFBUUMsbUNBQVcsUUFBUTtBQUFBLElBQ3hDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsWUFBWUQsTUFBSyxRQUFRQyxtQ0FBVyxlQUFlO0FBQUEsSUFDbkQsU0FBUyxDQUFDLEdBQUcsZ0JBQWdCLGVBQWU7QUFBQSxJQUM1Qyx1QkFBdUI7QUFBQSxNQUNyQixDQUFDLGlCQUFpQixPQUFPO0FBQUEsTUFDekIsQ0FBQywwQkFBMEIsT0FBTztBQUFBLElBQ3BDO0FBQUEsSUFDQSxVQUFVO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixxQkFBcUI7QUFBQSxNQUNyQixTQUFTLENBQUMsVUFBVTtBQUFBLE1BQ3BCLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxJQUNQO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbInBhdGgiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAicGF0aCIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSJdCn0K
