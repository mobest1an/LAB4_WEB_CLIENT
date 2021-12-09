import Area from "./Area";
import useStore, {CheckType} from "../../../../bll/state/store";

const AreaContainer = (props: {onAreaClick: Function}) => {
    const checks = useStore(state => state.getChecks());
    const getR = useStore(state => state.getR);

    const checkHit = (check: CheckType) => {
        let x = check.x;
        let y = check.y;
        let r = Number(getR());

        if (x >= 0 && y >= 0 && (Math.pow(x, 2) + Math.pow(y, 2)) <= Math.pow(r, 2)) {
            return true;
        }

        if (x <= 0 && y <= 0 && y + x >= (-r / 2)) {
            return true;
        }

        if (x >= 0 && y <= 0 && x <= r / 2 && y >= -r) {
            return true;
        }

        return false;
    }

    return (
        <div>
            <Area checks={checks} onAreaClick={props.onAreaClick} checkHit={checkHit}/>
        </div>
    );
}

export default AreaContainer;