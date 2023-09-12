import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const setup = (editor: Editor, url: string): void => {
  editor.ui.registry.addButton('imageupload', {
    text: 'imageupload button',
    onAction: () => {
      editor.setContent('<p>content added from imageupload</p>');
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('imageupload', setup);
};
