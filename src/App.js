import { SectionWrapper, Download, Features } from './components';

const App = () => {
  return (
    <div className='App'>
      <h1 className='text-3xl font-bold underline'>
        React Native NFT Showcase
      </h1>
      <Download />
      <Features />
      <SectionWrapper />
    </div>
  );
};

export default App;
