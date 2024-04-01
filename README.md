# _Chatbot builder_ : React-Flow-Template
A simple Chatbot Flow Builder built using **`React Flow`** and **`Bootstrapv5`**, with extensibility in mind for adding new features easily. The flow builder allows users to create chatbot flows by connecting multiple messages together to determine the order of execution.

<hr/>

> ### Features:
> **`Text Node and Edges`**
>    - Currently supports Text Messages.
>    - Multiple Text Nodes can exist within one flow and edges to connect two nodes together.
>    - Nodes are added to the flow by dragging and dropping a Node from the Nodes Panel dropdown.
>
> **`Nodes Panel`**
>    - Houses all types of Nodes that the Flow Builder supports (currently supports text node).
>    - Designed to be extensible for adding more types of Nodes in the future.
>
> **`Source/Target Handles`**
>    - Source handle is modified to have single edge originating from it.
>    - Target handle can have more than one edge connecting to it.
>
> **`Edit Panel`**
>    - Replaces the Nodes Panel when any existing Text Node is selected.
>    - Contains a text field to edit the text of the selected Text Node and submit it.
>
> **`Save Changes Button`**
>    - Allows users to save the flow.
>    - Displays -
>      - a confirm message if the flow has been saved successfully.
>      - an error message if there are more than one Nodes and more than one Node has empty target handles.

<hr/>

### Usage
1. Drag and drop Text Nodes from the Nodes Panel dropdown onto the canvas to create a new node for flow.
2. Connect the Text Nodes using Edges to define the flow sequence.
3. Edit the text of Text Nodes by selecting them and using the Edit Panel and submit them.
4. Click the Save Changes Button to save the flow.


