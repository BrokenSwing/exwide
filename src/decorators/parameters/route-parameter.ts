import {ParameterInfo, PARAM_INFO_METADATA} from '../../metadata/parameter-info';
import 'reflect-metadata';


export function RouteParam(name: string): Function {
    return function (target: Record<string, unknown>, propertyKey: string | symbol, parameterIndex: number): void {
        const annotatedParameters: ParameterInfo[] = Reflect.getOwnMetadata(PARAM_INFO_METADATA, target, propertyKey) || [];
        annotatedParameters.push({
            name,
            source: 'route',
            index: parameterIndex,
        });
        Reflect.defineMetadata(PARAM_INFO_METADATA, annotatedParameters, target, propertyKey);
    };
}