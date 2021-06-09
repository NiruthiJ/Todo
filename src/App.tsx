import React, { FC, useEffect } from "react";
import "./App.less";
import { fetchTodosRequest } from "./store/actionsCreators";
import ListContainer from "./components/organism/ListContainer/ListContainer";
import { Provider } from "react-redux";
import { Store } from "redux";
import Message from "./components/molecule/Message/Message";

interface IAppProps {
  store: Store;
}

export const App: React.FC<IAppProps> = ({ store }) => {
  useEffect(() => {
    fetchTodosRequest();
  }, []);

  return (
    <Provider store={store}>
      <div className="h-auto relative bg-gradient-to-r from-black via-gray-500 to-black">
        <img
          className="fixed w-screen top-0 left-0 opacity-30 object-cover h-screen"
          src="/images/bg2.jpg"
          alt=""
        />

        <div className="relative">
          <ListContainer></ListContainer>
          <Message></Message>
        </div>
      </div>
    </Provider>
  );
};

export default App;
