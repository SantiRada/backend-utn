export class Series {
    constructor (model) { this.model = model; }

    async GetSeries() {
        const result = await this.model.GetSeries();

        return result;
    }
    async GetSerieForID (id) {
        const result = await this.model.GetSerieForID(id);

        return result;
    }
    async GetSerieForFilter (typeFilter, filter) {
        const result = await this.model.GetSerieForFilter(typeFilter, filter);

        return result;
    }
    async CreateSerie (data) {
        const result = await this.model.CreateSerie(data);

        return result;
    }
    async UpdateSerie (data, id) {
        const result = await this.model.UpdateSerie(data, id);

        return result;
    }
    async UpdateSerieForFilter (data, filter) {
        const result = await this.model.UpdateSerieForFilter(data, filter);

        return result;
    }
    async ReplaceSerie (data, id) {
        const result = await this.model.ReplaceSerie(data, id);

        return result;
    }
    async DeleteSerie (id) {
        const result = await this.model.DeleteSerie(id);

        return result;
    }
    async DeleteSerieForFilter (filter) {
        const result = await this.model.DeleteSerieForFilter(filter);

        return result;
    }
}