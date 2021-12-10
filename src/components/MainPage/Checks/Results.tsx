import useStore from "../../../bll/state/store";

const Results = () => {
    const checks = useStore(state => state.getChecks());

    let results = checks.map(function (check) {
        return (
            <tr key={check.id}>
                <th>{check.x}</th>
                <th>{check.y}</th>
                <th>{check.r}</th>
                <th>{String(check.hit)}</th>
            </tr>
        );
    });

    return (
        <div className={"overflow-x-auto"}>
            <table className={"table w-full table-zebra"}>
                <thead>
                <tr>
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>
                    <th>Попала</th>
                </tr>
                </thead>

                <tbody>
                {results}
                </tbody>

                <tfoot>
                <tr>
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>
                    <th>Попала</th>
                </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Results;