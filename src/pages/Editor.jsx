import {
  HtmlEditor,
  Image,
  Link,
  Inject,
  Toolbar,
  QuickToolbar,
  RichTextEditorComponent,
} from "@syncfusion/ej2-react-richtexteditor";

import { EditorData } from "../data/dummy";
import { Header } from "../components";

const Editor = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl bg-white">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[HtmlEditor, Image, Toolbar, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
