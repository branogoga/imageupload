import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

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
