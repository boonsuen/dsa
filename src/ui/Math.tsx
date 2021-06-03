import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const KatexMath = (props) => {
  return (
    <InlineMath {...props} />
  );
};

export default KatexMath;