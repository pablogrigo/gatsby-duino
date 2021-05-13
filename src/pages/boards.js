import * as React from "react"
import Layout from "../components/layout";

const boards = [
    {name: 'Arduino Uno', processor: 'ATmega328P', mhz: 16},
    {name: 'Arduino Nano', processor: 'ATmega328', mhz: 16},
    {name: 'Arduino Pro', processor: 'ATmega328', mhz: 16},
    {name: 'Arduino Zero', processor: 'ATSAMD21G18A', mhz: 48},
];

const Boards = () => {
    return (
        <Layout title="Boards">
            <dl>
                {boards.map((board) => (
                    <React.Fragment>
                        <dt>{board.name}</dt>
                        <dd>{board.processor} @ {board.mhz}Mhz</dd>
                    </React.Fragment>
                ))}
            </dl>
        </Layout>
    )
};

export default Boards;
