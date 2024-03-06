import { Layout } from "./components";
import { GlobalStyle } from "./GlobalStyle";
import { AppRouter } from "./router";

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <AppRouter></AppRouter>
      </Layout>
    </div>
  );
};

export default App;
