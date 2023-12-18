import styles from './Button.module.css'
const Buttonrow = ({onButtonclick}) => {
    const buttons = ['AC','DE',".","/","7","8","9","*","4","5","6","-","1","2","3","+","00","0","="];
    return (
    <>
    {
        buttons.map(button=><input type="button" value={button} className={styles.input}
        onClick={onButtonclick}/>) 
    }
    </>);
};
export default Buttonrow;