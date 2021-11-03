
import { makeStyles } from '@mui/styles';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette:{
    primary: {main: "#FEC760"},
    secondary: {main: "#F0A71C"}
  }
});


function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar/>
        <About id="about" title="Sobre mí"/>
        <Projects id="projects" title="Mis proyectos" />
        <Skills id="skills" title="Mis conocimientos"/>
        <Contact id="contact" title="Contacto"/>
      </div>
    </ThemeProvider>
      
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    
  }
}));
export default App;
