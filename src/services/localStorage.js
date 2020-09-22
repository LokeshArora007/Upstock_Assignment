const LocalStorageService = (function () {
  let _service;
  function _getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }
  function _setData(data) {
    localStorage.setItem("ohlcData", data);
  }
  function _getData() {
    return localStorage.getItem("ohlcData");
  }
  function _clearData() {
    localStorage.removeItem("ohlcData");
  }
  return {
    getService: _getService,
    setData: _setData,
    getData: _getData,
    clearData: _clearData,
  };
})();
export default LocalStorageService;
