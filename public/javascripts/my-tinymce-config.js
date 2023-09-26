tinymce.init({
    selector: 'textarea#my-expressjs-tinymce-app',
    height: 300,
    menubar: false,
    plugins: [
      'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
      'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
      'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
 
    ],
    toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
      'alignleft aligncenter alignright alignjustify | ' +
      'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
      forced_root_block: '',
      force_br_newlines: true,
      force_p_newlines: false,
  });
 