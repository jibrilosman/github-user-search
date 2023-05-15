import React, { useState } from "react";
import Header from "./Header";
import "./index.css";
import "./darkTheme.css";
import Search from "./Search";


function App() {
  const [theme, setTheme] = useState("dark");

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  const [userName , setUserName] = useState('octocat')
  const [results, setResults] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

    const searchApi = async () => {
        setLoading(true)
        try {
            const response = await fetch(`https://api.github.com/users/${userName}`)
            const data = await response.json()
            if(data){
                setResults(data)
                setError(null)
            }
            else{
                setError('No results found')
            }
        } catch (error) {
            setError(error.message)
        }
        setLoading(false)
    }

    function handleChange(event){
        setUserName(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        searchApi()
    }

    if(error){
        return (
            <div>
                <Header theme={theme} handleThemeChange={handleThemeChange} />
                <Search 
                results={results} 
                userName={userName}
                handleSubmit={handleSubmit} 
                handleChange={handleChange}
                />
                <p>{error}</p>
            </div>
        )
    }

    if(loading){
        return (
            <div>
                <Header theme={theme} handleThemeChange={handleThemeChange} />
                <Search 
                results={results} 
                userName={userName}
                handleSubmit={handleSubmit} 
                handleChange={handleChange}
                />
                <p>Loading...</p>
            </div>
        )
    }

  return (
    <div>
      <Header theme={theme} handleThemeChange={handleThemeChange} />
      <Search 
       results={results} 
       userName={userName}
       handleSubmit={handleSubmit} 
        handleChange={handleChange}
       />
    </div>
  );
}
document.body.setAttribute("data-theme", "dark")
export default App;

