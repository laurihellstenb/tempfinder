import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import List from './components/List';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchResult />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<List />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<SearchBar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<SearchResult />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
