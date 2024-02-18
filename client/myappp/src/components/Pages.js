import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Pages = observer(() => {
    const { clothes } = useContext(Context);
    const pageCount = Math.ceil(clothes.totalCount / clothes.limit);
    const pages = [];

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }

    return (
        <div className="mt-3" style={{ display: 'flex', justifyContent: 'flex-start' }}>
            {pages.map(page =>
                <div
                    key={page}
                    onClick={() => clothes.setPage(page)}
                    style={{
                        cursor: 'pointer',
                        marginRight: '5px',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        color: clothes.page === page ? 'white' : 'black',
                        backgroundColor: clothes.page === page ? '#827cb8' : 'transparent',
                        border: clothes.page === page ? '1px solid #6b6698' : 'none',
                    }}
                >
                    {page}
                </div>
            )}
        </div>
    );
});

export default Pages;
