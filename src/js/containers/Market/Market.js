import React from "react"
import { connect } from "react-redux"

import { getTranslate } from 'react-localize-redux'
import { Currency, ManageColumn, MarketTable, SearchWord, SortColumn, TradingViewModal } from "../Market"


@connect((store) => {

  return {
    translate: getTranslate(store.locale),
  }
})

export default class Market extends React.Component {

  render() {
    return (
      <div className="market row market-landing">
        <h1 className="market-title">Ethereum Market</h1>
        <div className="market-header row">
          <div className="market-header-left large-10">
            <div className="columns large-5 market-search">
              <SearchWord />
            </div>
            <div className="columns large-2 market-choose-currency">
              <Currency />
            </div>
            <div className="columns large-3">
            </div>
          </div>
          <div className="market-header-right columns large-2">
            <ManageColumn />
          </div>
        </div>
        <div className="market-table">
            <div className="columns row">
              <MarketTable />
            </div>
        </div>
        <TradingViewModal />
      </div>
    )
  }
}