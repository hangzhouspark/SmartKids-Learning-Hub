import React, { useState, useEffect } from 'react';
import { getHistory, exportHistoryToCSV } from '../services/storageService';
import { HistoryRecord } from '../types';
import { Button } from './Button';
import { Download } from 'lucide-react';

interface SummaryProps {
    onBack: () => void;
}

export const Summary: React.FC<SummaryProps> = ({ onBack }) => {
    const [history, setHistory] = useState<HistoryRecord[]>([]);

    useEffect(() => {
        setHistory(getHistory());
    }, []);

    return (
        <div className="max-w-4xl mx-auto w-full">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-slate-700">📜 学习记录</h2>
                <div className="flex gap-2">
                    <Button variant="success" size="sm" onClick={exportHistoryToCSV}>
                        <Download size={18} className="mr-2"/> 导出 Excel
                    </Button>
                    <Button variant="neutral" size="sm" onClick={onBack}>返回</Button>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                {history.length === 0 ? (
                    <div className="p-12 text-center text-gray-400 text-xl">
                        还没有练习记录，快去学习吧！
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-100">
                                <tr>
                                    <th className="p-4 font-bold text-gray-600">日期</th>
                                    <th className="p-4 font-bold text-gray-600">项目</th>
                                    <th className="p-4 font-bold text-gray-600">得分</th>
                                    <th className="p-4 font-bold text-gray-600">错题概览</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {history.map(record => (
                                    <tr key={record.id} className="hover:bg-slate-50">
                                        <td className="p-4 text-sm text-gray-500">{record.date}</td>
                                        <td className="p-4 font-bold text-blue-600">{record.type}</td>
                                        <td className="p-4">
                                            <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                                                record.score >= 90 ? 'bg-green-100 text-green-700' : 
                                                record.score >= 60 ? 'bg-yellow-100 text-yellow-700' : 
                                                'bg-red-100 text-red-700'
                                            }`}>
                                                {record.score}分
                                            </span>
                                        </td>
                                        <td className="p-4 text-sm text-gray-400 max-w-xs truncate">
                                            {record.wrongItems.length > 0 ? record.wrongItems.join(', ') : '全对'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};