/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Alignment } from "@ckeditor/ckeditor5-alignment";
import { Autoformat } from "@ckeditor/ckeditor5-autoformat";
import { Autosave } from "@ckeditor/ckeditor5-autosave";
import {
  Bold,
  Code,
  Italic,
  Strikethrough,
  Subscript,
  Superscript,
  Underline
} from "@ckeditor/ckeditor5-basic-styles";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { CodeBlock } from "@ckeditor/ckeditor5-code-block";
import type { EditorConfig } from "@ckeditor/ckeditor5-core";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { FindAndReplace } from "@ckeditor/ckeditor5-find-and-replace";
import {
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize
} from "@ckeditor/ckeditor5-font";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { Highlight } from "@ckeditor/ckeditor5-highlight";
import { HorizontalLine } from "@ckeditor/ckeditor5-horizontal-line";
import { HtmlEmbed } from "@ckeditor/ckeditor5-html-embed";
import {
  DataFilter,
  DataSchema,
  FullPage,
  GeneralHtmlSupport,
  HtmlComment
} from "@ckeditor/ckeditor5-html-support";
import {
  AutoImage,
  Image,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload
} from "@ckeditor/ckeditor5-image";
import { Indent, IndentBlock } from "@ckeditor/ckeditor5-indent";
import { TextPartLanguage } from "@ckeditor/ckeditor5-language";
import { AutoLink, Link, LinkImage } from "@ckeditor/ckeditor5-link";
import { List, TodoList } from "@ckeditor/ckeditor5-list";
import { MediaEmbed, MediaEmbedToolbar } from "@ckeditor/ckeditor5-media-embed";
import { Mention } from "@ckeditor/ckeditor5-mention";
import { PageBreak } from "@ckeditor/ckeditor5-page-break";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { RemoveFormat } from "@ckeditor/ckeditor5-remove-format";
import { StandardEditingMode } from "@ckeditor/ckeditor5-restricted-editing";
import { SelectAll } from "@ckeditor/ckeditor5-select-all";
import { ShowBlocks } from "@ckeditor/ckeditor5-show-blocks";
import { SourceEditing } from "@ckeditor/ckeditor5-source-editing";
import {
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText
} from "@ckeditor/ckeditor5-special-characters";
import { Style } from "@ckeditor/ckeditor5-style";
import {
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar
} from "@ckeditor/ckeditor5-table";
import { TextTransformation } from "@ckeditor/ckeditor5-typing";
import { AccessibilityHelp } from "@ckeditor/ckeditor5-ui";
import { Undo } from "@ckeditor/ckeditor5-undo";
import { Base64UploadAdapter } from "@ckeditor/ckeditor5-upload";
import { EditorWatchdog } from "@ckeditor/ckeditor5-watchdog";

class Editor extends ClassicEditor {
  public static override builtinPlugins = [
    AccessibilityHelp,
    Alignment,
    AutoImage,
    AutoLink,
    Autoformat,
    Autosave,
    Base64UploadAdapter,
    BlockQuote,
    Bold,
    Code,
    CodeBlock,
    DataFilter,
    DataSchema,
    Essentials,
    FindAndReplace,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    FontSize,
    FullPage,
    GeneralHtmlSupport,
    Heading,
    Highlight,
    HorizontalLine,
    HtmlComment,
    HtmlEmbed,
    Image,
    ImageCaption,
    ImageInsert,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Indent,
    IndentBlock,
    Italic,
    TodoList,
    Link,
    LinkImage,
    MediaEmbed,
    MediaEmbedToolbar,
    Mention,
    PageBreak,
    Paragraph,
    RemoveFormat,
    SelectAll,
    ShowBlocks,
    SourceEditing,
    FindAndReplace,
    List,
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText,
    StandardEditingMode,
    Strikethrough,
    Style,
    Subscript,
    Superscript,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    TextPartLanguage,
    TextTransformation,
    Underline,
    Undo
  ];

  public static override defaultConfig: EditorConfig = {
    toolbar: {
      items: [
        "heading",
        "sourceEditing",
        "|",
        "findAndReplace",
        "selectAll",
        "alignment",
        "autoformat",
        "autosave",
        "bold",
        "underline",
        "highlight",
        "blockQuote",
        "imageUpload",
        "insertTable",
        "fontSize",
        "fontFamily",
        "fontColor",
        "|",
        "bulletedList",
        "numberedList",
        "todoList",
        "|",
        "undo",
        "redo",
        "specialCharacters",
        "pageBreak",
        "horizontalLine",
        "|",
        "bold",
        "italic",
        "underline",
        "highlight",
        "strikethrough",
        "subscript",
        "superscript",
        "code",
        "|",
        "imageUpload",
        "insertTable",
        "mediaEmbed",
        "htmlEmbed",
        "|",
        "fontSize",
        "fontFamily",
        "fontColor",
        "fontBackgroundColor",
        "|",
        "link",
        "blockQuote",
        "codeBlock",
        "|",

        "outdent",
        "indent",

        "|",

        "|",
        "removeFormat"
      ]
    },
    language: "fa",
    image: {
      toolbar: [
        "imageTextAlternative",
        "toggleImageCaption",
        "imageStyle:inline",
        "imageStyle:block",
        "imageStyle:side"
      ]
    },
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableCellProperties",
        "tableProperties"
      ]
    },
    fontFamily: {
        options: [
            'default',
            'Vazir, sans-serif', 'nozha',
            'Arial, Helvetica, sans-serif',
            'Courier New, Courier, monospace',
            'Georgia, serif',
            'Tahoma, Geneva, sans-serif',
            'Times New Roman, Times, serif',
            'Verdana, Geneva, sans-serif',
           
        ]
    },
  };
}

export default Editor;
