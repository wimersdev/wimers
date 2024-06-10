import React from "react";
import HeroScreen from "./components/HeroScreen";
import './App.css';
import './normalize.css';
import './webflow.css';

function App() {


    function extractAndAssignAssetUrls(rootElementId) {
        // Get the root element by its ID
        const rootElement = document.getElementById(rootElementId);
        if (!rootElement) {
            console.error('Root element not found');
            return null;
        }

        // Initialize an object to store the variable assignments
        const assets = {};

        // Iterate through the attributes of the root element
        for (let attr of rootElement.attributes) {
            // Check if the attribute name matches the required pattern
            if (attr.name.startsWith("iphoneModel") ||
                attr.name.startsWith("hugeButton") ||
                attr.name.startsWith("screen")) {
                // Dynamically assign the attribute value to a variable named after the attribute
                assets[attr.name] = attr.value;
            }
        }

        // Log the variables to the console
        for (let key in assets) {
            console.log(`const ${key} = "${assets[key]}";`);
        }

        // Return the object containing all the variables
        return assets;
    }



    return (
        <>
            <HeroScreen assets={()=>(extractAndAssignAssetUrls('root'))} />
        </>
    );
}

export default App;
