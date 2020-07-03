/*
jsx?

Babel converts jsx form into react element,
	React.createElement(
	"tag",
	attributes,
	content
	)

>Readable format
>jsx is not required when using react but recomended as code get complex, nested react elements can be confusing

====================================================================================

JSX
>Special dialect of JS
>Browser don't understand jsx code! we write jsx then run tools to turn it into norma js
>Very similar in form and function to HTML with a couple of differences

=======================================================================

Diff b/w jsx and html
>Adding coustom styling to an element uses different syntax

HTML <div style="background-color:red;"></div>
JSX <div style={{backgroundColor:"red"}}></div>

>Adding a class to an element uses different syntax

HTML <div class="name"></div>
JSX <div className="name"></div>

>JSX can reference JS variables
	jsx can add js variable values

JSX
let a = "name"

<div>{a}<div>

jsx can render
>function
>string
>arr
>obj.property



jsx can't render
>object (as text)
>boolean


Can detect invalid property in browser console

====================================================================================
*/
