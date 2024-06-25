declare module '*.css' {
    interface IClassNames {
      [className:string]:string
    }
  
    const classNames: IClassNames;
  
    export default classNames;
  }


  //./src/components/UI/MyModal/MyModal.module.css