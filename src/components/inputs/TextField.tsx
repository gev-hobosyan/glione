interface Props {
  id: string;
  children: string;
  value: string;
  setValue:
    | React.Dispatch<React.SetStateAction<string>>
    | React.Dispatch<React.SetStateAction<string | undefined>>;
}

/**
 *TextField component with a textarea and a label that moves when you type 
 * 
 * @param {string} id -  unique id for textarea and label
 * @param {string} children - Label text
 * @param {string} value - Current textarea value
 * @param {function} setValue - Updates the textarea value
 *
 */

const TextField = ({ id, children, value, setValue }: Props) => {
  return (
    <div className="relative">
      <textarea
        className="w-full h-40  text-white focus:ring-0 border-white/50 border p-4 rounded-2xl focus:outline-none focus:shadow-input focus:border-primary peer placeholder-transparent"
        id={id}
        placeholder={children}
        autoFocus={true}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      ></textarea>
      <label
        htmlFor={id}
        className="absolute text-white left-4 top-4 peer-placeholder-shown:text-gray-500 -translate-y-6.5 peer-placeholder-shown:translate-y-0 transition-all scale-90"
      >
        {children}
      </label>
    </div>
  );
};

export default TextField;
