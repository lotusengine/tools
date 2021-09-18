"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionSchemaInputParameterSchema = exports.actionSchemaResultParameterSchema = exports.actionSchemaNextParameterSchema = exports.actionSchemaOutputParameterSchema = exports.baseActionSchema = exports.commonMetaSchema = exports.commonEventSchema = exports.commonTagSchema = exports.commonKeySchema = exports.commonDataSchema = exports.commonDescriptionSchema = exports.commonSummarySchema = exports.commonLabelSchema = void 0;
const fluent_json_schema_1 = __importDefault(require("fluent-json-schema"));
exports.commonLabelSchema = fluent_json_schema_1.default.string().maxLength(100);
exports.commonSummarySchema = fluent_json_schema_1.default.string().maxLength(200);
exports.commonDescriptionSchema = fluent_json_schema_1.default.string().maxLength(1000);
exports.commonDataSchema = fluent_json_schema_1.default.oneOf([fluent_json_schema_1.default.object(), fluent_json_schema_1.default.array()]);
exports.commonKeySchema = fluent_json_schema_1.default.string()
    .maxLength(100)
    .pattern('^[A-Za-z][A-Za-z_0-9-]{1,98}[A-Z0-9a-z]$');
exports.commonTagSchema = fluent_json_schema_1.default.string()
    .maxLength(20)
    .minLength(5)
    .pattern('^[a-z0-9]+$');
exports.commonEventSchema = fluent_json_schema_1.default.string()
    .maxLength(100)
    .minLength(5)
    .pattern('^[a-z_]+$');
exports.commonMetaSchema = fluent_json_schema_1.default.object()
    .additionalProperties(false)
    .prop('author', fluent_json_schema_1.default.string().maxLength(100))
    .prop('url', fluent_json_schema_1.default.string().format('url').maxLength(250));
exports.baseActionSchema = fluent_json_schema_1.default.object()
    .additionalProperties(false)
    .prop('description', exports.commonDescriptionSchema)
    .prop('parameters', fluent_json_schema_1.default.object().additionalProperties(false).required().default({}));
exports.actionSchemaOutputParameterSchema = fluent_json_schema_1.default.oneOf([
    fluent_json_schema_1.default.boolean(),
    fluent_json_schema_1.default.string().pattern(/$.*/).default('$')
]);
exports.actionSchemaNextParameterSchema = fluent_json_schema_1.default.string().pattern('^[A-Za-z][A-Za-z_0-9-]{1,98}[A-Z0-9a-z]$');
exports.actionSchemaResultParameterSchema = fluent_json_schema_1.default.oneOf([
    fluent_json_schema_1.default.string(),
    fluent_json_schema_1.default.object()
]);
exports.actionSchemaInputParameterSchema = fluent_json_schema_1.default.oneOf([
    fluent_json_schema_1.default.string(),
    fluent_json_schema_1.default.object()
]);
//# sourceMappingURL=schemaUtils.js.map